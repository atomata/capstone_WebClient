

let ExperienceName: string;

function useExperienceName(name :string){
    ExperienceName=name;
}

function getExperienceName(){
    return (ExperienceName);
}


export {useExperienceName,getExperienceName}