let Person = {
	name : "ludeno",
	language : "Javascript"
};
let Korean = {
	from : "Korea",
	UsedIDE : "Vscode"
};

let mergeObj = {...Person, ...Korean};

console.log(mergeObj);


