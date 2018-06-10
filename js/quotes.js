/*These quotes are copied from the API "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1" after my failed attempts to properly fetch*/

const QUOTES = [
  {
    ID: 280,
    title: "David Craib",
    content:
      "Design should never say, 'Look at me.' It should always say, 'Look at this.'",
    link: "https://quotesondesign.com/david-craib/",
    custom_meta: {
      Source:
        '<a href="http://www.amazon.com/gp/product/159253127X?ie=UTF8&tag=css-tricks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=159253127X">book</a>'
    }
  },
  {
    ID: 1039,
    title: "Paul Heckel",
    content:
      "If Ernest Hemingway, James Mitchener, Neil Simon, Frank Lloyd Wright, and Pablo Picasso could not get it right the first time, what makes you think that you will?",
    link: "https://quotesondesign.com/paul-heckel-2/"
  },
  {
    ID: 1616,
    title: "James Weaver",
    content: "Web design is art wrapped in technology.",
    link: "https://quotesondesign.com/james-weaver/"
  },
  {
    ID: 321,
    title: "Despair Poster",
    content:
      "Just because you've always done it that way doesn't mean it's not incredibly stupid.",
    link: "https://quotesondesign.com/despair-poster/",
    custom_meta: {
      Source: '<a href="http://despair.com/tradition.html">poster</a>'
    }
  },
  {
    ID: 1422,
    title: "Michael Bierut",
    content: "Clients are the difference between design and art.",
    link: "https://quotesondesign.com/michael-bierut-2/"
  },
  {
    ID: 1449,
    title: "Douglas Adams",
    content:
      "The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair.",
    link: "https://quotesondesign.com/douglas-adams-3/"
  },
  {
    ID: 596,
    title: "Carolyn Wood",
    content:
      "Turning away bad clients can leave you feeling oddly guilty. They're sort of like alcoholic or meth head cousins who force you, by their own bad behavior into denying them things you wouldn't deny other people. You're left feeling not quite yourself.",
    link: "https://quotesondesign.com/carolyn-wood/",
    custom_meta: {
      Source:
        '<a href="http://twitter.com/carywood/status/2121020860">Twitter</a>'
    }
  },
  {
    ID: 119,
    title: "Seth Godin",
    content:
      "Fire the committee. No great website in history has been conceived of by more than three people. Not one. This is a dealbreaker.",
    link: "https://quotesondesign.com/seth-godin/"
  },
  {
    ID: 1136,
    title: "Paul Attwood",
    content:
      "Decisions on artwork by committee end up being made on the premise of not turning people off rather than turning people on.",
    link: "https://quotesondesign.com/paul-attwood/"
  },
  {
    ID: 1560,
    title: "Ira Glass",
    content:
      "All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it's just not that good. It's trying to be good, it has potential, but it's not. But your taste, the thing that got you into the game, is still killer. And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most people I know who do interesting, creative work went through years of this. We know our work doesn't have this special thing that we want it to have. We all go through this. And if you are just starting out or you are still in this phase, you gotta know it's normal and the most important thing you can do is do a lot of work; It is only by going through a volume of work that you will close that gap, and your work will be as good as your ambitions; It's gonna take awhile; You've just gotta fight your way through.",
    link: "https://quotesondesign.com/ira-glass-2/",
    custom_meta: {
      Source:
        '<a href="http://011101010.blogspot.com/2010/11/thank-you-ira.html">snipped</a>'
    }
  },
  {
    ID: 436,
    title: "Paul Jacques Grillo",
    content:
      "Simplicity does not mean want or poverty. It does not mean the absence of any decor, or absolute nudity. It only means that the decor should belong intimately to the design proper, and that anything foreign to it should be taken away.",
    link: "https://quotesondesign.com/paul-jacques-grillo/",
    custom_meta: {
      Source: '<a href="http://37signals.com/09.html">website</a>'
    }
  },
  {
    ID: 1723,
    title: "Justin Giovanetti",
    content:
      "Designing with watermarked photos is like baking with fake sugar.",
    link: "https://quotesondesign.com/justin-giovanetti/"
  },
  {
    ID: 207,
    title: "Bill Tregle's Dad",
    content:
      "It's amazing how much you can get done in a day if you just sit and you do it.",
    link: "https://quotesondesign.com/bill-tregles-dad/",
    custom_meta: {
      Source: '<a href="http://www.imdb.com/title/tt0275408/">movie</a>'
    }
  },
  {
    ID: 1282,
    title: "Bill Buxton",
    content: "Now that we can do anything, what should we do?",
    link: "https://quotesondesign.com/bill-buxton/"
  },
  {
    ID: 372,
    title: "Merlin Mann",
    content:
      "People with tiny glasses and costly shoes can always find a couple of hours to explain how you did it all wrong.",
    link: "https://quotesondesign.com/merlin-mann/",
    custom_meta: {
      Source:
        '<a href="http://www.kungfugrippe.com/post/76532722/and-yet-ironically-enough-anyone-can-swiss">website</a>'
    }
  },
  {
    ID: 22,
    title: "D. H. Lawrence",
    content:
      "Design in art, is a recognition of the relation between various things, various elements in the creative flux. You can't invent a design. You recognize it, in the fourth dimension. That is, with your blood and your bones, as well as with your eyes.",
    link: "https://quotesondesign.com/d-h-lawrence/"
  },
  {
    ID: 1286,
    title: "Adrian Shaughnessy",
    content:
      "Graphic design has been likened to a wine glass. When we drink wine we barely notice the glass it's served in. It wouldn't be true to say that we don't care what glass we drink out of; we wouldn't choose to drink a rare vintage out of a Tupperware mug, for example; but it's the wine that matters, not the vessel it comes in.",
    link: "https://quotesondesign.com/adrian-shaughnessy/",
    custom_meta: {
      Source:
        '<a href="http://observatory.designobserver.com/entry.html?entry=7257">transcript</a>'
    }
  },
  {
    ID: 1344,
    title: "Von Glitschka",
    content:
      "A healthy creative process should be able to give a coherent rationale to a client as to why you designed what you designed.",
    link: "https://quotesondesign.com/von-glitschka-2/"
  },
  {
    ID: 2362,
    title: "Rebecca Rolfe",
    content:
      "Instead of asking the user to make a choice up front, maybe we can set a smart default and see if there is high demand after launch for more customization.",
    link: "https://quotesondesign.com/rebecca-rolfe/",
    custom_meta: {
      Source:
        '<a href="http://www.refinery29.com/female-white-hat-hackers-google-chrome">interview</a>'
    }
  },
  {
    ID: 1812,
    title: "Paul Rand",
    content:
      "Art is an idea that has found its perfect visual expression. And design is the vehicle by which this expression is made possible. Art is a noun, and design is a noun and also a verb. Art is a product and design is a process. Design is the foundation of all the arts.",
    link: "https://quotesondesign.com/paul-rand-10/"
  }
];
