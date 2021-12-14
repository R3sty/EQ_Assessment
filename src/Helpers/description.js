export const resultsDescription = [
  {
    category: "overAll",
    description: {
      high: "Your emotional intelligence is developed. You understand differences in colleagues’ motivations and are able to adjust your approach to encourage and support them in the workplace. You can understand and manage your emotions. You also have a sense of how your actions affect those around you. You may be able to see signs of emotional swings in those around you and use active listening skills to help them cope with tough situations. You are assertive and consider the needs of others as well as your own when making decisions and eliciting solutions.",
      medium:
        "Your emotional intelligence is developing. While you may have some areas where you display high emotional intelligence, there are times or situations where you find it difficult to keep your emotions in check. There may be times when you find it difficult to understand the motivations of colleagues and you struggle to provide motivation to direct reports as they work to achieve their tasks. You would benefit by considering the events and situations that trigger you and those around you, then come up with more supportive responses. A key point to remember as you develop your emotional intelligence is, as you work on one area, you are building your skills in all areas. ",
      low: "Your emotional intelligence needs attention. You may find that you let your emotions control your behaviors. You may speak without thinking about the impact your words and actions have on others. A good next step for you is to understand your own feelings and consider the emotional factors that result in any given behavior. These skills will help you improve your emotional intelligence across the whole spectrum.",
    },
  },
  {
    category: "selfAwareness",
    description: {
      high: "Your self-awareness is developed. This means you can probably identify a wide range of emotions and understand the spectrum of emotions you experience. You may also grasp the effect these emotions have on you and your interactions with others. You may read the signs of when and why these emotions reveal themselves and have strategies for using that information.",
      medium:
        "Your self-awareness is developing. As you explore emotions and take inventory of your feelings, you are understanding the role these emotions play in your daily life and interactions with others. Focusing on developing your vocabulary of emotions and taking the time to identify yours will help to increase your emotional awareness and ability to analyze the messages revealed by them.",
      low: "Your self-awareness requires attention. You may have difficulty understanding why you have certain emotions or feel controlled by them. Often, people that have low self awareness blame others for their emotional states and are quick to find fault. To start improving your emotional awareness, you may want to start noticing the people and events that trigger potent emotional responses in you and then ask yourself why that is so. Also, expanding your vocabulary of emotions will help you identify those feelings when you experience them.",
    },
  },
  {
    category: "selfManagement",
    description: {
      high: "Your self-management skills are developed. You understand your emotions, how they affect you, and have learned strategies to help you successfully handle non-productive emotions so they do not unnecessarily escalate conflict in the workplace. You are also skilled at knowing what information needs to be provided to colleagues and direct reports and which is better to keep to yourself to mitigate conflict and emotional responses. You may also understand what events trigger different emotional responses, both in yourself and others, and have strategies for using your feelings to your benefit.",
      medium:
        "Your self-management skills are developing. There may be times you respond emotionally to stressful situations. However, you are starting to understand why you have the emotions you do and are discovering some coping mechanisms. To continue developing your self-management skills you may want to practice mindfulness or seek advice from people with developed self-management skills to learn their coping techniques.",
      low: "Your self-managements skills need attention. You may become easily upset when things do not go your way or you face a stressful situation, letting your emotions control your behavior. To improve your self-management skill, you could try counting to ten before responding in high-pressure situations, taking a break when you feel overwhelmed by emotions or discussing your concerns with a colleague before replying in critical situations. These techniques will help you respond more constructively and professionally.",
    },
  },
  {
    category: "empathy",
    description: {
      high: "Your empathy skills are developed. You take the time to put yourself in the shoes of others and consider their situations when making decisions. You may think deeply about behaviors, considering the drivers of those, such as cultural preferences, thoughts and environmental factors that affect responses in a given situation. You may have the ability to read a room and understand that role that mixing personalities has on smooth interactions. You could continue to build your empathy skills by identifying people’s emotions in movies, TV shows and novels. Then paying close attention to how these characters are affected by interactions with others.",
      medium:
        "Your empathy skills are developing. You can experience empathy, but it does not come naturally. As a result, you may appear to be cold at times despite having a genuinely caring personality. You could improve by using active listening skills to show that you understand the key points of other people’s topics and using follow-up questions to dig deeper into the ideas that are presented. Also, considering the situation from the other person’s point of view will give you a new perspective on the problem and its solution.",
      low: "Your empathy skills need attention. You have difficulty understanding the motivations for other’s behaviors. You may think people get emotional over things you feel are insignificant. You could improve by observing other people and their interactions, paying attention to their body language as a clue to what lies beneath their spoken words. You could do this not only through your personal interactions but also through observing behaviors in TV shows, movies and novels. Also, calling people by their names will help build a deeper bond with them.",
    },
  },
  {
    category: "socialSkills",
    description: {
      high: "Your social skills are developed. You are able to recognize your feeling and those of the people around you. You can adopt your behavior and communication style to make others comfortable in work and social situations. Then consider the best course based on what is beneficial for all concerned. When engaged in negotiations or conflicts you look for solutions that will create win-win outcomes. You are skilled at eliciting ideas from others and making them feel their opinions are valuable.",
      medium:
        "Your social skills are developing. You may understand the level of diplomacy needed to negotiate conflict successfully, but not yet have the skill to create scenarios where everyone walks away satisfied. You have mixed results in social situations, particularly struggling to achieve positive outcomes in unfamiliar situations You may occasionally put your needs and desires before the good of the group, resulting in unexpected conflict. To improve, focus on gratitude and appreciation of others. This will help you understand the value that each person brings to the situation and allows you to be assertive rather than aggressive.",
      low: "Your social skills need attention. You may be hyper competitive and not able to make concessions that ease conflict. Your focus is often on what benefits you and you may feel that allowing others to go first will dilute your ideas and opinions. On the other end of the spectrum, you may be overly passive and feel that anything you say will result in conflict, so you choose not to respond. In either case, you could improve by considering the benefit of your proposals for others and presenting your ideas in an open and concise manner, leaving room in discussions for other’s opinions.",
    },
  },
  {
    category: "motivation",
    description: {
      high: "You are intrinsically motivated. This helps you to not only get tasks done at a high level but also motivate others to achieve success in their endeavors. You are probably a very optimistic person who lifts the spirits of those around you and looks for the teaching point in challenging situations. As a person with intrinsic motivation, you are able to set challenging goals for yourself and achieve them with little need for external praise or recognition. To continue developing your motivation, consider how your moods and feelings impact those around you.",
      medium:
        "When you are excited about a goal or a project, you may find yourself able to motivate yourself to achieve at a high level. However, there are times where you crave praise for doing a good job, needing someone to 'cheerlead' to get yourself started on or continue a hard assignment. To improve your motivation, focus on taking initiative to define what outstanding work is and how to achieve it. You may also find it beneficial to consider the wider value of your contributions and set a higher level of expectation for yourself.",
      low: "You are highly motivated by what others think of you and your accomplishments. You enjoy getting praise for a job well done and may find the challenge of someone saying you can’t do something creates a fire within you to challenge those ideas and achieve even more. To become more intrinsically motivated, you should look for ways to incorporate more of your talents and abilities into your work. Also, being more optimistic could help you to more effectively work with others.",
    },
  },
];

//get description for each category from resultsDescriptions
export const getDescription = (category, level) => {
  for (let i = 0; i < resultsDescription.length; i++) {
    if (resultsDescription[i].category === category) {
      return resultsDescription[i].description[level];
    }
  }
};
