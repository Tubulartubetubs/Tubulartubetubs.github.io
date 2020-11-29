function render_header(image, name, profession, content){
    //containers
    var form = document.createElement("form");
    var imageDiv = document.createElement("div");
    var headerDiv = document.createElement("div");

    //content
    var imageContent = document.createElement("img");
    var nameContent = document.createElement("h1");
    var professionContent = document.createElement("h2");
    var aboutContent = document.createElement("p");

    //form content
    var nameLabel = document.createElement("label");
    var jobLabel = document.createElement("label");
    var aboutLabel = document.createElement("label");
    var imageLabel = document.createElement("label");
    var nameInput = document.createElement("input");
    var jobInput = document.createElement("input");
    var aboutInput = document.createElement("textarea");
    var imageInput = document.createElement("input");
    var submitButton = document.createElement("div");

    nameLabel.setAttribute("for","nameInput");
    nameLabel.innerHTML = "Name";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "nameInput");
    nameInput.setAttribute("name", "name");
    nameInput.value = name;
    jobLabel.setAttribute("for", "jobInput");
    jobLabel.innerHTML = "Profession"
    jobInput.setAttribute("type", "text");
    jobInput.setAttribute("id", "jobInput");
    jobInput.setAttribute("name", "profession");
    jobInput.value = profession;
    aboutLabel.setAttribute("for", "aboutInput");
    aboutLabel.innerHTML = "About Me";
    aboutInput.setAttribute("id", "aboutInput");
    aboutInput.setAttribute("name", "aboutMe");
    aboutInput.setAttribute("rows", "14");
    aboutInput.setAttribute("cols", "100");
    aboutInput.value = content;
    imageLabel.setAttribute("for","imageFaceInput");
    imageLabel.innerHTML = "Image URL";
    imageInput.setAttribute("type", "text");
    imageInput.setAttribute("id", "imageFaceInput");
    imageInput.setAttribute("name", "link");
    submitButton.innerHTML = "Save"
    submitButton.setAttribute("id", "headerSubmitButton");
    submitButton.setAttribute("onclick", "updateHeader()");

    nameInput.className = "header input name";
    jobInput.className = "header input job";
    aboutInput.className = "header input about";

    imageDiv.className = "imgSource";
    headerDiv.className = "headers";
    
    nameContent.className = "name";
    professionContent.className = "profession";
    aboutContent.className = "content";

    imageContent.setAttribute("src", image);
    imageContent.setAttribute("alt", "BioPic");

    nameContent.innerHTML = name;
    professionContent.innerHTML = profession;
    aboutContent.innerHTML = content;

    imageDiv.appendChild(imageContent);
    // headerDiv.appendChild(nameContent);
    // headerDiv.appendChild(professionContent);
    // headerDiv.appendChild(aboutContent);

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(jobLabel);
    form.appendChild(jobInput);
    form.appendChild(aboutLabel);
    form.appendChild(aboutInput);
    form.appendChild(imageLabel);
    form.appendChild(imageInput);
    form.appendChild(submitButton);

    headerDiv.appendChild(form)

    document.getElementById("headerContainer").appendChild(imageDiv);
    document.getElementById("headerContainer").appendChild(headerDiv);
}

function render_education(id, image, name, course, yearStart, yearEnd){
    //containers
    var educationContainerDiv = document.createElement("div");
    var educationImageDiv = document.createElement("div");
    var removeButtonDiv = document.createElement("div");

    //content
    var educationImageContent = document.createElement("img");
    var educationContent = document.createElement("h2");
    var educationContentString = name + " || " + course + " || " + yearStart + "-" + yearEnd;
    var removeButtonSymbol = document.createElement("span");
    removeButtonSymbol.innerHTML = "-";

    educationContainerDiv.className = "education container";
    educationImageDiv.className = "education image";
    removeButtonDiv.className = "removeButton";
    removeButtonDiv.setAttribute("id", "removeEducationButton");
    removeButtonDiv.onclick = function(){
        deleteEducation(id);
    }
    educationContent.className = "education title";

    educationImageContent.setAttribute("src", image);
    educationContent.innerHTML = educationContentString;

    removeButtonDiv.appendChild(removeButtonSymbol);
    educationImageDiv.appendChild(educationImageContent);
    educationContainerDiv.appendChild(educationImageDiv);
    educationContainerDiv.appendChild(educationContent);
    educationContainerDiv.appendChild(removeButtonDiv);

    document.getElementById("Education").appendChild(educationContainerDiv);
}

function render_organizations(id, image, title, yearStart){
    //containers
    var orgContainerDiv = document.createElement("div");
    var orgImageDiv = document.createElement("div");

    //content
    var orgImageContent = document.createElement("img");
    var orgContent = document.createElement("h2");
    var orgContentString = title + " || Since " + yearStart;

    var removeButtonDiv = document.createElement("div");
    var removeButtonSymbol = document.createElement("span");
    removeButtonSymbol.innerHTML = "-";
    removeButtonDiv.className = "removeButton";
    removeButtonDiv.setAttribute("id", "removeOrgButton");
    removeButtonDiv.onclick = function(){
        deleteOrg(id);
    }
    
    orgContainerDiv.className = "organizations container";
    orgImageDiv.className = "organizations image";
    orgContent.className = "organizations title";
    
    orgImageContent.setAttribute("src", image);
    orgContent.innerHTML = orgContentString;
    
    removeButtonDiv.appendChild(removeButtonSymbol);
    orgImageDiv.appendChild(orgImageContent);
    orgContainerDiv.appendChild(orgImageDiv);
    orgContainerDiv.appendChild(orgContent);
    orgContainerDiv.appendChild(removeButtonDiv);

    document.getElementById("Organizations").appendChild(orgContainerDiv);
}

function render_works(id, image){
        var worksImageDiv = document.createElement("div");
        var divOverlay = document.createElement("div");
        divOverlay.className ="works overlay";
        worksImageDiv.className = "works container image";
        var worksImageContent = document.createElement("img");
        worksImageContent.setAttribute("src", image);
        worksImageDiv.appendChild(worksImageContent);
        worksImageDiv.onclick= function(){
            deleteWork(id);
        }
        document.getElementById("Works").appendChild(worksImageDiv);
}

function render_skills(id,image,title,level,yearStart){
    //containers
    var skillsContainerDiv = document.createElement("div");
    var skillsImageDiv = document.createElement("div");

    //content
    var skillsImageContent = document.createElement("img");
    var skillsContent = document.createElement("h2");
    var skillsContentString = title + " || " + level + " || Since " + yearStart;

    skillsContainerDiv.className = "skills container";
    skillsImageDiv.className = "skills image";
    skillsContent.className = "skills title";
    
    skillsImageContent.setAttribute("src", image);
    skillsContent.innerHTML = skillsContentString;
    
    var removeButtonDiv = document.createElement("div");
    var removeButtonSymbol = document.createElement("span");
    removeButtonSymbol.innerHTML = "-";
    removeButtonDiv.className = "removeButton";
    removeButtonDiv.setAttribute("id", "removeSkillButton");
    removeButtonDiv.onclick = function(){
        deleteSkill(id);
    }
    removeButtonDiv.appendChild(removeButtonSymbol);

    skillsImageDiv.appendChild(skillsImageContent);
    skillsContainerDiv.appendChild(skillsImageDiv);
    skillsContainerDiv.appendChild(skillsContent);
    skillsContainerDiv.appendChild(removeButtonDiv);

    document.getElementById("Skills").appendChild(skillsContainerDiv);
}

function render_experience(id, image, job, title, yearStart, yearEnd, list){
    //containers
    var experienceContainerDiv = document.createElement("div");
    var experienceImageDiv = document.createElement("div");
    var titleJobDiv = document.createElement("div");
    var experienceUnorderedList = document.createElement("ul");

    //content
    var experienceImageContent = document.createElement("img");
    var experienceJobContent = document.createElement("h2");
    var experienceTitleContent = document.createElement("h3");
    var experienceTitleContentString = title + " / " + yearStart + " - " + yearEnd;
    var experienceListContent;

    experienceContainerDiv.className = "experience container";
    experienceImageContent.className = "experience image";
    experienceJobContent.className = "experience job";
    experienceTitleContent.className = "experience title";
    experienceUnorderedList.className = "experience list";
    titleJobDiv.className = "experience TitleJobDiv";

    experienceImageContent.setAttribute("src", image);
    experienceJobContent.innerHTML = job;
    experienceTitleContent.innerHTML = experienceTitleContentString;
    // experienceListContent.innerHTML = list[0];

    var removeButtonDiv = document.createElement("div");
    var removeButtonSymbol = document.createElement("span");
    removeButtonSymbol.innerHTML = "-";
    removeButtonDiv.className = "removeButton";
    removeButtonDiv.setAttribute("id", "removeExpButton");
    removeButtonDiv.onclick = function(){
        deleteExp(id);
    }
    removeButtonDiv.appendChild(removeButtonSymbol);

    experienceImageDiv.appendChild(experienceImageContent);
    for(let i=0;i<list.length; i++){
        if(list[i] != ""){
            experienceListContent = document.createElement("li");
            experienceListContent.innerHTML = list[i];
            experienceUnorderedList.appendChild(experienceListContent);
        }
    }
    experienceUnorderedList.appendChild(experienceListContent);
    
    experienceContainerDiv.appendChild(experienceImageDiv);
    titleJobDiv.appendChild(experienceJobContent);
    titleJobDiv.appendChild(experienceTitleContent);
    titleJobDiv.appendChild(removeButtonDiv)
    experienceContainerDiv.appendChild(titleJobDiv)
    experienceContainerDiv.appendChild(experienceUnorderedList);

    document.getElementById("experiences").appendChild(experienceContainerDiv);
}

function render_links(link, image){
    var linkContent = document.createElement("a");
    var formDiv = document.createElement("div")
    var form = document.createElement("form");
    var breakline = document.createElement("br");

    formDiv.className("links form div");

    //labels
    var githubLabel = document.createElement("label");
    var fiverrLabel = document.createElement("label");
    var artstationLabel = document.createElement("label");
    var twitterLabel = document.createElement("label");
    var igLabel = document.createElement("label");
    var linkedinLabel = document.createElement("label");

    githubLabel.className = "link input label";
    fiverrLabel.className = "link input label";
    artstationLabel.className = "link input label";
    twitterLabel.className = "link input label";
    igLabel.className = "link input label";
    linkedinLabel.className = "link input label";

    githubLabel.setAttribute("for", "githubLink");
    fiverrLabel.setAttribute("for", "fiverrLink")
    artstationLabel.setAttribute("for", "artstationLink");
    twitterLabel.setAttribute("for", "twitterLink");
    igLabel.setAttribute("for", "igLink");
    linkedinLabel.setAttribute("for", "linkedinLink");

    //input
    var githubInput = document.createElement("input");
    var fiverrInput = document.createElement("input");
    var artstationInput = document.createElement("input");
    var twitterInput = document.createElement("input");
    var igInput = document.createElement("input");
    var linkedinInput = document.createElement("input");
    
    githubInput.className = "link input box";
    fiverrInput.className = "link input box";
    artstationInput.className = "link input box";
    twitterInput.className = "link input box";
    igInput.className = "link input box";
    linkedinInput.className = "link input box";

    githubInput.setAttribute("type", "text");
    fiverrInput.setAttribute("type", "text");
    artstationInput.setAttribute("type", "text");
    twitterInput.setAttribute("type", "text");
    igInput.setAttribute("type", "text");
    linkedinInput.setAttribute("type", "text");

    githubInput.setAttribute("id","githubLink");
    fiverrInput.setAttribute("id","fiverrLink");
    artstationInput.setAttribute("id","artstationLink");
    twitterInput.setAttribute("id","twitterLink");
    igInput.setAttribute("id","igLink");
    linkedinInput.setAttribute("id","linkedinLink");

    //button
    var submitButton = document.createElement("div");
    submitButton.setAttribute("id", "linkSubmitButton");
    submitButton.onclick = function(){
        updateLink();
    };

    submitButton.innerHTML = "Update";

    form.appendChild(githubLabel)
    form.appendChild(githubInput)
    form.appendChild(breakline)
    form.appendChild(fiverrLabel)
    form.appendChild(fiverrInput)
    form.appendChild(breakline)
    form.appendChild(artstationLabel)
    form.appendChild(artstationInput)
    form.appendChild(breakline)
    form.appendChild(twitterLabel)
    form.appendChild(twitterInput)
    form.appendChild(breakline)
    form.appendChild(igLabel)
    form.appendChild(igInput)
    form.appendChild(breakline)
    form.appendChild(linkedinLabel)
    form.appendChild(linkedinInput)
    form.appendChild(breakline)
    form.appendChild(submitButton);

    formDiv.appendChild(form);

    document.getElementById("links").appendChild(formDiv);
}