const serpapi = require("serpapi");
const { config, getJson } = serpapi;
config.api_key = <<<<YOUR SERPAPI KEY>>>>;
config.timeout = 60000;


async function main(imgUrl) {
  // Show result as JSON
  const response = await getJson("google_lens", {
    url: imgUrl,
    api_key: <<<<YOUR SERPAPI KEY>>>>
  });
  console.log(response["knowledge_graph"][0]["title"]);
  return response["knowledge_graph"][0]["title"];
};


const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents});
const configD = require("./config");

bot.login(configD.token)

bot.on('ready', async bot  =>
{
  console.log((bot.user.tag)+" is online !")
})
bot.on("messageCreate", async message => {
  if (message.author.username == "Pokétwo")
  {
    console.log("new message from Pokétwo received.");
    var imagemessage = message.attachments;
    imagemessage = imagemessage.toJSON();
    if (message.embeds.length != 0)
    {
      if (message.embeds[0].title === "A wild pokémon has appeared!")
    {
      console.log("A pokemon has appeared.")
      const start = performance.now();
      var image_url = message.embeds[0].image.url;
      var pokemon = await main(image_url);
      const messagePriv = bot.users.cache.get(<<<YOUR DISCORD USER ID>>>);
      messagePriv.send("@Pokétwo#8236 c "+ pokemon);
      const end = performance.now();
      const time = end - start;
      console.log("Done in : "+time+"ms.");
    }
    }
  } 
})
