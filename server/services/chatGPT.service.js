const { Configuration, OpenAIApi } = require("openai");
const categoryService = require("./subcategory.service");
const brandService = require("./brand.service");
 
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const talkToChatGPT = async (message) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0,
    max_tokens: 80,
  });
  return response;
};

exports.getProductDescription = async (product) =>{

    const category =  await categoryService.displaySubcategory({id: product.subcategory});
    const brand =  await brandService.displayBrand({id: product.brand});

    const message = `Create a concise 80-word description for a product, incorporating the provided details.
            title: ${product.title},tags: ${product.tags},gender: ${product.gender},
            brand ${brand.title},
            category: ${category.title},category-tags: ${category.tags}`;
    const response = await talkToChatGPT(message);
    return response.data.choices[0].text;
}
