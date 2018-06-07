/*These quotes are copied from the API "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1" after my failed attempts to properly fetch*/

const QUOTES = [
  {
    ID: 280,
    title: "David Craib",
    content:
      "<p>Design should never say, &#8220;Look at me.&#8221; It should always say, &#8220;Look at this.&#8221;  </p>\n",
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
      "<p>If Ernest Hemingway, James Mitchener, Neil Simon, Frank Lloyd Wright, and Pablo Picasso could not get it right the first time, what makes you think that you will?  </p>\n",
    link: "https://quotesondesign.com/paul-heckel-2/"
  },
  {
    ID: 1616,
    title: "James Weaver",
    content: "<p>Web design is art wrapped in technology.</p>\n",
    link: "https://quotesondesign.com/james-weaver/"
  },
  {
    ID: 321,
    title: "Despair Poster",
    content:
      "<p>Just because you&#8217;ve always done it that way doesn&#8217;t mean it&#8217;s not incredibly stupid.  </p>\n",
    link: "https://quotesondesign.com/despair-poster/",
    custom_meta: {
      Source: '<a href="http://despair.com/tradition.html">poster</a>'
    }
  },
  {
    ID: 1422,
    title: "Michael Bierut",
    content: "<p>Clients are the difference between design and art.  </p>\n",
    link: "https://quotesondesign.com/michael-bierut-2/"
  },
  {
    ID: 1449,
    title: "Douglas Adams",
    content:
      "<p>The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair. </p>\n",
    link: "https://quotesondesign.com/douglas-adams-3/"
  },
  {
    ID: 596,
    title: "Carolyn Wood",
    content:
      "<p>Turning away bad clients can leave you feeling oddly guilty. They&#8217;re sort of like alcoholic or meth head cousins who force you, by their own bad behavior into denying them things you wouldn&#8217;t deny other people. You&#8217;re left feeling not quite yourself.  </p>\n",
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
      "<p>Fire the committee. No great website in history has been conceived of by more than three people. Not one. This is a dealbreaker.  </p>\n",
    link: "https://quotesondesign.com/seth-godin/"
  },
  {
    ID: 1136,
    title: "Paul Attwood",
    content:
      "<p>Decisions on artwork by committee end up being made on the premise of not turning people off rather than turning people on.  </p>\n",
    link: "https://quotesondesign.com/paul-attwood/"
  },
  {
    ID: 1560,
    title: "Ira Glass",
    content:
      "<p>All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it&#8217;s just not that good. It&#8217;s trying to be good, it has potential, but it&#8217;s not. But your taste, the thing that got you into the game, is still killer. And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most people I know who do interesting, creative work went through years of this. We know our work doesn&#8217;t have this special thing that we want it to have. We all go through this. And if you are just starting out or you are still in this phase, you gotta know it&#8217;s normal and the most important thing you can do is do a lot of work &#8230; It is only by going through a volume of work that you will close that gap, and your work will be as good as your ambitions &#8230; It\u2019s gonna take awhile &#8230; You\u2019ve just gotta fight your way through.</p>\n",
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
      "<p>Simplicity does not mean want or poverty. It does not mean the absence of any decor, or absolute nudity. It only means that the decor should belong intimately to the design proper, and that anything foreign to it should be taken away.  </p>\n",
    link: "https://quotesondesign.com/paul-jacques-grillo/",
    custom_meta: {
      Source: '<a href="http://37signals.com/09.html">website</a>'
    }
  },
  {
    ID: 1723,
    title: "Justin Giovanetti",
    content:
      "<p>Designing with watermarked photos is like baking with fake sugar.</p>\n",
    link: "https://quotesondesign.com/justin-giovanetti/"
  },
  {
    ID: 207,
    title: "Bill Tregle&#8217;s Dad",
    content:
      "<p>It&#8217;s amazing how much you can get done in a day if you just sit and you do it.  </p>\n",
    link: "https://quotesondesign.com/bill-tregles-dad/",
    custom_meta: {
      Source: '<a href="http://www.imdb.com/title/tt0275408/">movie</a>'
    }
  },
  {
    ID: 1282,
    title: "Bill Buxton",
    content: "<p>Now that we can do anything, what should we do?  </p>\n",
    link: "https://quotesondesign.com/bill-buxton/"
  },
  {
    ID: 372,
    title: "Merlin Mann",
    content:
      "<p>People with tiny glasses and costly shoes can always find a couple of hours to explain how you did it all wrong.  </p>\n",
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
      "<p>Design in art, is a recognition of the relation between various things, various elements in the creative flux. You can&#8217;t invent a design. You recognize it, in the fourth dimension. That is, with your blood and your bones, as well as with your eyes.  </p>\n",
    link: "https://quotesondesign.com/d-h-lawrence/"
  },
  {
    ID: 1286,
    title: "Adrian Shaughnessy",
    content:
      "<p>Graphic design has been likened to a wine glass. When we drink wine we barely notice the glass it&#8217;s served in. It wouldn&#8217;t be true to say that we don&#8217;t care what glass we drink out of &#8211; we wouldn&#8217;t choose to drink a rare vintage out of a Tupperware mug, for example &#8211; but it&#8217;s the wine that matters, not the vessel it comes in.   </p>\n",
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
      "<p>A healthy creative process should be able to give a coherent rationale to a client as to why you designed what you designed.  </p>\n",
    link: "https://quotesondesign.com/von-glitschka-2/"
  },
  {
    ID: 2362,
    title: "Rebecca Rolfe",
    content:
      "<p>Instead of asking the user to make a choice up front, maybe we can set a smart default and see if there is high demand after launch for more customization.</p>\n",
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
      "<p>Art is an idea that has found its perfect visual expression. And design is the vehicle by which this expression is made possible. Art is a noun, and design is a noun and also a verb. Art is a product and design is a process. Design is the foundation of all the arts.</p>\n",
    link: "https://quotesondesign.com/paul-rand-10/"
  }
];
