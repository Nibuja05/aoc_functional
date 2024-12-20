declare global {
	interface Object {
		/**
		 * Executes a callback function with the object as its parameter.
		 * @template T - The type of the object.
		 * @template R - The return type of the callback function.
		 * @param {((variable: T) => R)} callback - The callback function.
		 * @returns {R} - The result of the callback function.
		 */
		use<T, R>(this: T, callback: (variable: T) => R): R;

		/**
		 * Logs the object to the console.
		 * @param this - The type of object.
         * @param {string} prefix - The prefix to log.
		 * @returns {T} - The object.
		 */
		log<T>(this: T, prefix?: string): T;
	}
}

/**
 * @template T - The type of the object.
 * @template R - The return type of the callback function.
 * @param {((variable: T) => R)} callback - The callback function.
 * @returns {R} - The result of the callback function.
 */
Object.prototype.use = function <T, R>(callback: (variable: T) => R) {
	// Use type assertion to infer the type of 'this'
	return callback(this as unknown as T);
};

/**
 * Logs the object to the console.
 * @param this - The type of object.
 * * @param {string} prefix - The prefix to log.
 * @returns {T} - The object.
 */
Object.prototype.log = function <T>(this: T, prefix?: string) {
	prefix? console.log(prefix, this) : console.log(this);
	return this;
};

interface CustomIterator<T> extends Iterable<T> {
	map<U>(callback: (value: T, index: number, array: T[]) => U): CustomIterator<U>;
	filter(callback: (value: T) => boolean): CustomIterator<T>;
	reduce<U>(
		callback: (accumulator: U, current: T, index: number, generator: CustomIterator<T>) => U,
		initialValue: U,
		cancelCondition?: (accumulator: U, current: T, index: number, generator: CustomIterator<T>) => boolean
	): U;
	next(): T | undefined;
	toString(): string;
}

class FunctionalIterator<T> implements CustomIterator<T> {
	private source: Iterable<T>;

	constructor(source: Iterable<T>) {
		this.source = source;
	}

	map<U>(callback: (value: T, index: number, array: T[]) => U): CustomIterator<U> {
		const mappedIterator = function* (this: FunctionalIterator<T>) {
            let index = 0;
			for (const value of this.source) {
				yield callback(value, index, this.source as any as T[]);
                index++;
			}
		}.bind(this);

		return new FunctionalIterator<U>(mappedIterator());
	}

	filter(callback: (value: T) => boolean): CustomIterator<T> {
		const filteredIterator = function* (this: FunctionalIterator<T>) {
			for (const value of this.source) {
				if (callback(value)) {
					yield value;
				}
			}
		}.bind(this);

		return new FunctionalIterator<T>(filteredIterator());
	}

	reduce<U>(
		callback: (accumulator: U, current: T, index: number, generator: CustomIterator<T>, last: boolean) => U,
		initialValue: U,
		cancelCondition?: (accumulator: U, current: T, index: number, generator: CustomIterator<T>) => boolean
	): U {
		let accumulator = initialValue;
		let index = 0;

		const generator = this.source[Symbol.iterator]();
		let result = generator.next();

		while (!result.done) {
			if (cancelCondition && cancelCondition(accumulator, result.value, index, this)) {
                accumulator = callback(accumulator, result.value, index, this, true);
				break;
			}
			accumulator = callback(accumulator, result.value, index, this, false);
			index++;
			result = generator.next();
		}

		return accumulator;
	}

	next(): T | undefined {
		const iterator = this.source[Symbol.iterator]();
		const result = iterator.next();
		return result.value;
	}

	[Symbol.iterator](): Iterator<T> {
		const iterator = this.source[Symbol.iterator]();

		return {
			next: () => {
				const result = iterator.next();
				if (result.done) {
					(iterator as any)[Symbol.iterator] = () => this[Symbol.iterator]();
				}
				return result;
			},
		};
	}

    log(prefix?: string): FunctionalIterator<T> {
        prefix? console.log(prefix, this.toString()) : console.log(this.toString());
        return this;
    }

	toString(): string {
		const previewIter = new FunctionalIterator<T>(this.source);
		const preview = previewIter.reduce(
			(acc, cur, index) => {
				if (index == 0) return `${cur}`;
				const nextAcc = `${acc}, ${cur}`;
				if (nextAcc.length >= 17) {
					return `${nextAcc.slice(0, 17)}...`;
				}
				return nextAcc;
			},
			"",
			(acc) => acc.length >= 17
		);
		return `FunctionalIterator { source: ${this.source}, content: [${preview}] }`;
	}
}

export function iterator(source?: number): CustomIterator<number>;
export function iterator<T>(source: Iterable<T>): CustomIterator<T>;
export function iterator<T>(source: (index: number) => T): CustomIterator<T>;
export function iterator<T>(source?: Iterable<T> | ((index: number) => T) | number): CustomIterator<T | number> {
	if (typeof source == "function") {
		const generator = function* () {
			let index = 0;
			while (true) {
				yield source(index);
				index++;
			}
		};
		return new FunctionalIterator<T>(generator());
	} else if (typeof source == "number") {
		const generator = function* () {
			for (let i = 0; i < source; i++) {
				yield i;
			}
		};
		return new FunctionalIterator<number>(generator());
	} else if (source == undefined) {
		const generator = function* () {
			let index = 0;
			while (true) {
				yield index;
				index++;
			}
		};
		return new FunctionalIterator<number>(generator());
	}
	return new FunctionalIterator<T>(source);
}

export type MatchArr = Array<string> & {
	index: number;
};
