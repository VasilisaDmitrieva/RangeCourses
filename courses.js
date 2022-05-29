let courses = [
	{ name: "Courses in England", prices: [0, 100] }, 
	{ name: "Courses in Germany", prices: [500, null] }, 
	{ name: "Courses in Italy", prices: [100, 200] }, 
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];


const nullCmp = (a, b) => {
	return a <= b || b == null;
}

const getCoursesByRange = (courses, range) => {
	return courses.filter(x => nullCmp(x.prices[0], range[1]) && 
							   nullCmp(range[0], x.prices[1]));
}

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let ranges = [requiredRange1, requiredRange2, requiredRange3];
ranges.forEach(x => console.log(getCoursesByRange(courses, x)));
