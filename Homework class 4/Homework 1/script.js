function tellStory(name, mood, activity) {
    const story = `This is ${name}. ${name} is a nice person. ${name} is ${mood} when he is ${activity} all day. The end.`;
  
    return story;
  }
  
  const result = tellStory("Ilija", "happy", "coding");
  console.log(result);
  