const regexName = /^(?!.*\d)[A-Za-z]{3,24}$/;
const regexImage = /^(?=.{1,}\.\w+$|.{1,}\:\/\/).+$/;
const RegexNumber = /^[0-9]+$/;
const regexLife = /^[0-9]+$/

const validation = (formData)=>{

    const errors = {}

    if(!regexName.test(formData.name)) errors.name = "Your name is invalid"


    if(!regexImage.test(formData.image)) errors.image = "Should be a pictur"

    
    if (!RegexNumber.test(formData.height1) || !RegexNumber.test(formData.height2))
    errors.height1 = "You can only put numbers";

    else if (!formData.height1 || !formData.height2)
    errors.height1 = "Debe llenar ambos campos";

    else if (Number(formData.height2) <= Number(formData.height1))
    errors.height1 = "The second value must be greater than the first";


    if (!RegexNumber.test(formData.weight1) || !RegexNumber.test(formData.weight2))
    errors.weight1 = "You can only put numbers";

    else if (!formData.weight1 || !formData.weight2)
    errors.weight1 = "You must fill in both fields";

    else if (Number(formData.weight1) >= Number(formData.weight2))
    errors.weight1 = "The second value must be greater than the first";


    if(!regexLife.test(formData.life_span)) errors.life_span = "must be a number"


    if(formData.temperament.length === 0) errors.temperament = "You must select at least 1 temperament"
    
    return errors
}

export default validation;