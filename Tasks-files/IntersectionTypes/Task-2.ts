// Problem 2: You have types `Frontend` and `Backend`. Create a FullStackDev type using
// intersection. Create a function `getSkills()` that accepts a `FullStackDev` and logs all skills.

type Frontend = {
    language : string;
    isFigma : boolean;
    communicationLevel: string;
    designSkills : string;
}

type Backend = {
    language: string;
    problemSolvingSkill : string;
    codeOptimization: string;
}

type FullStackDev = Frontend | Backend;

function getSkills(){
    console.log()
}

getSkills();