function Boo() {
	let state = 0;

	return {
		next: () => {
			state++;
			switch (state) {
				case 1:
					console.log('start');
					return { value: 1, done: false };
				case 2:
					return { value: 2, done: false };
				case 3:
					return { value: 3, done: false };
				case 4:
					console.log('finish');
					return { value: undefined, done: true };
				default:
					return { value: undefined, done: true };
			}
		},
	};
}

const iterator = Boo();
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().done);
