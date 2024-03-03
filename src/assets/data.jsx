const CARD_DATA = [
    {
        question: "Start!",
        answer: "Click on the forward or backward buttons to navigate the flashcards",
    },
    {
        question: "What is the supreme law of the land?",
        answer: "the Constitution",
        difficulty: "easy",
    },
    {
        question: "What does the Constitution do?",
        answer: "sets up the government",
        difficulty: "medium",
    },
    {
        question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
        answer: "We the People",
        difficulty: "hard",
    },
    {
        question: "What is an amendment?",
        answer: "a change (to the Constitution)",
        difficulty: "easy",
    },
    {
        question: "What do we call the first ten amendments to the Constitution?",
        answer: "the Bill of Rights",
        difficulty: "medium",
    },
    {
        question: "What is one right or freedom from the First Amendment?",
        answer: "speech",
        difficulty: "easy",
    },
    {
        question: "How many amendments does the Constitution have?",
        answer: "twenty-seven (27)",
        difficulty: "medium",
    },
    {
        question: "What are two rights in the Declaration of Independence?",
        answer: "Life, Liberty, and the pursuit of Happiness",
        difficulty: "easy",
    },
    {
        question: "What is freedom of religion?",
        answer: "You can practice any religion, or not practice a religion",
        difficulty: "medium",
    },
    {
        question: "What is the economic system in the United States?",
        answer: "Capitalist economy",
        difficulty: "medium",
    },
    {
        question: "Name one branch or part of the government.",
        answer: "Congress",
        difficulty: "easy",
    },
    {
        question: "Who makes federal laws?",
        answer: "Congress",
        difficulty: "medium",
    },
    {
        question: "What are the two parts of the U.S. Congress?",
        answer: "The Senate and House of Representatives",
        difficulty: "medium",
    },
    {
        question: "How many U.S. Senators are there?",
        answer: "One hundred (100)",
        difficulty: "hard",
    },
    {
        question: "We elect a U.S. Senator for how many years?",
        answer: "Six (6)",
        difficulty: "medium",
    },
    {
        question: "Who does a U.S. Senator represent?",
        answer: "All people of the state",
        difficulty: "medium",
    },
    {
        question: "Why do some states have more Representatives than other states?",
        answer: "Because they have more people",
        difficulty: "hard",
    },
    {
        question: "We elect a President for how many years?",
        answer: "Four (4)",
        difficulty: "easy",
    },
    {
        question: "In what month do we vote for President?",
        answer: "November",
        difficulty: "easy",
    },
    {
        question: "What is the name of the President of the United States now?",
        answer: "The answer will depend on the current date",
        difficulty: "hard",
    },
    {
        question: "What is the name of the Vice President of the United States now?",
        answer: "The answer will depend on the current date",
        difficulty: "hard",
    },
    {
        question: "If the President can no longer serve, who becomes President?",
        answer: "The Vice President",
        difficulty: "medium",
    },
    {
        question: "Who is the Commander in Chief of the military?",
        answer: "The President",
        difficulty: "medium",
    },
    {
        question: "Who signs bills to become laws?",
        answer: "The President",
        difficulty: "medium",
    },
    {
        question: "Who vetoes bills?",
        answer: "The President",
        difficulty: "medium",
    },
    {
        question: "What does the President’s Cabinet do?",
        answer: "Advises the President",
        difficulty: "hard",
    },
    {
        question: "What does the judicial branch do?",
        answer: "Reviews laws, explains laws, resolves disputes, decides if a law goes against the Constitution",
        difficulty: "hard",
    },
    {
        question: "What is the highest court in the United States?",
        answer: "The Supreme Court",
        difficulty: "medium",
    },
    {
        question: "How many justices are on the Supreme Court?",
        answer: "Nine (9)",
        difficulty: "medium",
    },
    {
        question: "Who is the Chief Justice of the United States now?",
        answer: "The answer will depend on the current date",
        difficulty: "hard",
    },
    {
        question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
        answer: "To print money",
        difficulty: "medium",
    },
    {
        question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
        answer: "Provide schooling and education",
        difficulty: "medium",
    },
    {
        question: "Who is the Governor of your state now?",
        answer: "The answer will depend on the current date and the state",
        difficulty: "hard",
    },
    {
        question: "What is the capital of your state?",
        answer: "The answer will depend on the state",
        difficulty: "hard",
    },
    {
        question: "What are the two major political parties in the United States?",
        answer: "Democratic and Republican",
        difficulty: "easy",
    },
    {
        question: "What is the political party of the President now?",
        answer: "The answer will depend on the current date",
        difficulty: "hard",
    },
    {
        question: "What is the name of the Speaker of the House of Representatives now?",
        answer: "The answer will depend on the current date",
        difficulty: "hard",
    },
    {
        question: "What is one responsibility that is only for United States citizens?",
        answer: "Serve on a jury",
        difficulty: "medium",
    },
    {
        question: "Name one right only for United States citizens.",
        answer: "Vote in a federal election",
        difficulty: "medium",
    },
    {
        question: "What are two rights of everyone living in the United States?",
        answer: "Freedom of expression and freedom of speech",
        difficulty: "easy",
    },
    {
        question: "What do we show loyalty to when we say the Pledge of Allegiance?",
        answer: "The United States",
        difficulty: "easy",
    },
    {
        question: "What is one promise you make when you become a United States citizen?",
        answer: "Give up loyalty to other countries",
        difficulty: "medium",
    },
    {
        question: "How old do citizens have to be to vote for President?",
        answer: "Eighteen (18) and older",
        difficulty: "easy",
    },
    {
        question: "What are two ways that Americans can participate in their democracy?",
        answer: "Vote and join a political party",
        difficulty: "medium",
    },
    {
        question: "When is the last day you can send in federal income tax forms?",
        answer: "April 15",
        difficulty: "easy",
    },
    {
        question: "When must all men register for the Selective Service?",
        answer: "At age eighteen (18)",
        difficulty: "medium",
    },
    {
        question: "What is one reason colonists came to America?",
        answer: "Freedom",
        difficulty: "easy",
    },
    {
        question: "Who lived in America before the Europeans arrived?",
        answer: "American Indians",
        difficulty: "easy",
    },
    {
        question: "What group of people was taken to America and sold as slaves?",
        answer: "Africans",
        difficulty: "medium",
    },
    {
        question: "Why did the colonists fight the British?",
        answer: "Because of high taxes",
        difficulty: "medium",
    },
    {
        question: "Who wrote the Declaration of Independence?",
        answer: "Thomas Jefferson",
        difficulty: "medium",
    },
    {
        question: "When was the Declaration of Independence adopted?",
        answer: "July 4, 1776",
        difficulty: "easy",
    },
    {
        question: "There were 13 original states. Name three.",
        answer: "New York, New Jersey, New Hampshire",
        difficulty: "hard",
    },
    {
        question: "What happened at the Constitutional Convention?",
        answer: "The Constitution was written",
        difficulty: "medium",
    },
    {
        question: "When was the Constitution written?",
        answer: "1787",
        difficulty: "medium",
    },
    {
        question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
        answer: "James Madison",
        difficulty: "hard",
    },
    {
        question: "What is one thing Benjamin Franklin is famous for?",
        answer: "U.S. diplomat",
        difficulty: "medium",
    },
    {
        question: "Who is the “Father of Our Country”?",
        answer: "George Washington",
        difficulty: "easy",
    },
    {
        question: "Who was the first President?",
        answer: "George Washington",
        difficulty: "easy",
    },
    {
        question: "What territory did the United States buy from France in 1803?",
        answer: "The Louisiana Territory",
        difficulty: "medium",
    },
    {
        question: "Name one war fought by the United States in the 1800s.",
        answer: "Civil War",
        difficulty: "medium",
    },
    {
        question: "Name the U.S. war between the North and the South.",
        answer: "The Civil War",
        difficulty: "easy",
    },
    {
        question: "Name one problem that led to the Civil War.",
        answer: "Slavery",
        difficulty: "medium",
    },
    {
        question: "What was one important thing that Abraham Lincoln did?",
        answer: "Freed the slaves (Emancipation Proclamation)",
        difficulty: "medium",
    },
    {
        question: "What did the Emancipation Proclamation do?",
        answer: "Freed the slaves",
        difficulty: "medium",
    },
    {
        question: "What did Susan B. Anthony do?",
        answer: "Fought for women's rights",
        difficulty: "medium",
    },
    {
        question: "Name one war fought by the United States in the 1900s.",
        answer: "World War I",
        difficulty: "medium",
    },
    {
        question: "Who was President during World War I?",
        answer: "Woodrow Wilson",
        difficulty: "medium",
    },
    {
        question: "Who was President during the Great Depression and World War II?",
        answer: "Franklin Roosevelt",
        difficulty: "medium",
    },
    {
        question: "Who did the United States fight in World War II?",
        answer: "Japan, Germany, and Italy",
        difficulty: "medium",
    },
    {
        question: "Before he was President, Eisenhower was a general. What war was he in?",
        answer: "World War II",
        difficulty: "medium",
    },
    {
        question: "During the Cold War, what was the main concern of the United States?",
        answer: "Communism",
        difficulty: "medium",
    },
    {
        question: "What movement tried to end racial discrimination?",
        answer: "Civil rights movement",
        difficulty: "medium",
    },
    {
        question: "What did Martin Luther King, Jr. do?",
        answer: "Fought for civil rights",
        difficulty: "medium",
    },
    {
        question: "What major event happened on September 11, 2001, in the United States?",
        answer: "Terrorists attacked the United States",
        difficulty: "easy",
    },
    {
        question: "Name one American Indian tribe in the United States.",
        answer: "Cherokee",
        difficulty: "hard",
    },
    {
        question: "Name one of the two longest rivers in the United States.",
        answer: "Mississippi River",
        difficulty: "medium",
    },
    {
        question: "What ocean is on the West Coast of the United States?",
        answer: "Pacific Ocean",
        difficulty: "easy",
    },
    {
        question: "What ocean is on the East Coast of the United States?",
        answer: "Atlantic Ocean",
        difficulty: "easy",
    },
    {
        question: "Name one U.S. territory.",
        answer: "Puerto Rico",
        difficulty: "medium",
    },
    {
        question: "Name one state that borders Canada.",
        answer: "Maine",
        difficulty: "medium",
    },
    {
        question: "Name one state that borders Mexico.",
        answer: "California",
        difficulty: "medium",
    },
    {
        question: "What is the capital of the United States?",
        answer: "Washington, D.C.",
        difficulty: "easy",
    },
    {
        question: "Where is the Statue of Liberty?",
        answer: "New York Harbor",
        difficulty: "easy",
    },
    {
        question: "Why does the flag have 13 stripes?",
        answer: "Because there were 13 original colonies",
        difficulty: "medium",
    },
    {
        question: "Why does the flag have 50 stars?",
        answer: "Because there is one star for each state",
        difficulty: "medium",
    },
    {
        question: "What is the name of the national anthem?",
        answer: "The Star-Spangled Banner",
        difficulty: "easy",
    },
    {
        question: "When do we celebrate Independence Day?",
        answer: "July 4",
        difficulty: "easy",
    },
    {
        question: "Name two national U.S. holidays.",
        answer: "New Year’s Day and Independence Day",
        difficulty: "easy",
    },
    {
        question: "What is one responsibility that is only for United States citizens?",
        answer: "Serve on a jury",
        difficulty: "medium",
    },
    {
        question: "Name one right only for United States citizens.",
        answer: "Vote in a federal election",
        difficulty: "medium",
    },
    {
        question: "What are two rights of everyone living in the United States?",
        answer: "Freedom of expression and freedom of speech",
        difficulty: "easy",
    },
    {
        question: "What do we show loyalty to when we say the Pledge of Allegiance?",
        answer: "The United States",
        difficulty: "easy",
    },
    {
        question: "What is one promise you make when you become a United States citizen?",
        answer: "Give up loyalty to other countries",
        difficulty: "medium",
    },
    {
        question: "How old do citizens have to be to vote for President?",
        answer: "Eighteen (18) and older",
        difficulty: "easy",
    },
    {
        question: "What are two ways that Americans can participate in their democracy?",
        answer: "Vote and join a political party",
        difficulty: "medium",
    },
    {
        question: "When is the last day you can send in federal income tax forms?",
        answer: "April 15",
        difficulty: "easy",
    },
    {
        question: "When must all men register for the Selective Service?",
        answer: "At age eighteen (18)",
        difficulty: "medium",
    },
    {
        question: "What is one reason colonists came to America?",
        answer: "Freedom",
        difficulty: "easy",
    },
];

export default CARD_DATA;