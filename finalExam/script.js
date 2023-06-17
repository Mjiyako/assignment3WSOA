var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

  const week1 = document.querySelector('#button0');
  const week2 = document.querySelector('#button1');
  const week3 = document.querySelector('#button2');
  const week4 = document.querySelector('#button3');
  const week7 = document.querySelector('#button4');
  const week8 = document.querySelector('#button5');
  const week9 = document.querySelector('#button6');
  const week10 = document.querySelector('#button7');
  const week13 = document.querySelector('#button8');
  week1.addEventListener("click",() => textReveal());
  week2.addEventListener("click",() => textReveal1());
  week3.addEventListener("click",() => textReveal2());
  week4.addEventListener("click",() => textReveal3());
  week7.addEventListener("click",() => textReveal6());
  week8.addEventListener("click",() => textReveal7());
  week9.addEventListener("click",() => textReveal8());
  week10.addEventListener("click",() => textReveal9());
  week13.addEventListener("click",() => textReveal12());

  function textReveal() {
    var x = document.getElementById("readmoreText");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function textReveal1() {
    var x = document.getElementById("readmoreText1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal2() {
    var x = document.getElementById("readmoreText2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal3() {
    var x = document.getElementById("readmoreText3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal4() {
    var x = document.getElementById("readmoreText4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal5() {
    var x = document.getElementById("readmoreText5");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal6() {
    var x = document.getElementById("readmoreText6");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal7() {
    var x = document.getElementById("readmoreText7");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal8() {
    var x = document.getElementById("readmoreText8");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal9() {
    var x = document.getElementById("readmoreText9");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal10() {
    var x = document.getElementById("readmoreText10");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal11() {
    var x = document.getElementById("readmoreText11");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function textReveal12() {
    var x = document.getElementById("readmoreText12");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  


  const blog = document.getElementById("readmoreText");
  blog.innerHTML = `<p><strong><span style="text-decoration: underline;">My Experience setting up Github</span></strong></p>
  <p>Setting up Github was kind of intimidating because as time has been going all these websites or apps are becoming more and more complex to use as a person starting off using the softwares it is as if a punishment as to why one has not been using the software or site and get the 'OG' users talk about certain annoying features and tricks not known by new people, but overall me setting up Github was much easier than I had initially thought it would be, it is a cool software that does wonders as one can be able to save work without having to be worried that one day their device might get ruined and not be able to recover the hard work made, and it allows for much easier backtracking when you want to fix an issue you make without having to delete other work you made before by just going to the part where you made the mistake. Overall the little time spent learning how to use Github I am impressed by things that can be achieved and how it helps one work much more efficiently alone and/or with a group big thumbs up .</p>
  <p><span style="text-decoration: underline;"><strong>Reflection on the reading</strong></span></p>
  <p>The reading I engaged on this week is by Wardrip-Fruin "What Hypertext Is", initially my first thought reading through this was that, how can people have arguments about what hypertexts are till I managed to get how the confusion comes about. I do have to agree with Nelsons explanation of hypertexts as actually to a average user and non-designer point of view it is just like an interactive form of media but in a form of words that lead you on to different parts of texts that one may desire to look at, at that time, before having a look on this reading I initially understood hypertexts on a basic level of like sort of button one clicks that helps you links to certain sites or texts to make understanding much easier and get to your desired destination of the site much quicker than having to read everything on the page.&nbsp;</p>
  <p>&nbsp;</p>
  <p><strong><span style="text-decoration: underline;">Goals for this course</span></strong></p>
  <p>I didnt think that far with the course as I had no idea prior to doing the course what it was about, so currently going with the flow and loving the fact I will be making websites using HTML CSS and Javascript, I've always wanted to learn these languages to expand my exposure in coding and programming, feeling great about this looking forward to creating websites and application.
  
  <p><strong><span style="text-decoration: underline;">References</span></strong></p>
  <p>Borges, JL. 1998. The Library of Babel. Collected Fictions. New York: Penguin.&nbsp;</p>`;



  const blog1 = document.getElementById("readmoreText1");
  blog1.innerHTML = `<p><strong><span style="text-decoration: underline;">My Experience Starting HTML</span></strong></p>
  <p>Starting of the year with a new challenge at hand after a very crazy period learning about C++ and C#, having to start off learning about HTML bought me all the struggles and nightmare I had when learning a new coding language. To say I am totally unfamiliar with  HTML would be incorrect as in the last month I have engaged with a video that teaches beginners HTML and CSS but was doing it for fun and just developed an interest in just being able to make a website myself for a gaming clan in PubG Mobile. As I was learning the basic fundamentals of HTML and CSS I quickly realized how actually easy it is to understand as compared to the other languages I have covered in the last year it more of  English language structure and to do certain tasks like for example writing a line of text or paragraph being able to just use p "text" /p  which is the easiest of the two languages I have learnt to date. Overall I am very excited and like HTML and CSS because of how easy it is to apply very easy languages to learn.<p><span style="text-decoration: underline;"><strong>Reflection on the reading</strong></span></p>
  <p>The reading by  Lawson, Bruce. “Why You Should Choose HTML5.” is a little confusing to me about why to use article over  section as to me they appear to be the same thing and think that perhaps as you are building the website you could use and of the two and just make sure any of the two give you the best result you need and having to fix here and there to get the desired outcome, but having seen there are screen readers that happen to bump into some difficulties distinguishing when a summary for example the use of both to me looks like they their own benefits as sections can be used to properly and clearly separate extra of additional text from each other and articles being used to separate paragraphs and heads from main text. At this moment I am very confused between their difference I would like to see the differences they make through testing by building sites using both.&nbsp;</p>`;
  
  const blog2 = document.getElementById("readmoreText2");
  blog2.innerHTML = `<p><strong><span style="text-decoration: underline;">Experience continuing web developemnt.</span></strong></p>
  <p>This week I learnt about CSS styling of websites and how it is done, learnt that for styling of the website it is possible to style the website on the HTML file but then it is not recommended as it will dirty up the HTML  which is not ideal at all, I found it nice and pretty straight forward but with potential of being tricky as you may want to style a number of things on the web page and will require you to specify exactly what you are targeting to style  and can lead to a whole lot of code written to style and can create mistakes as you style more and more, I never thought this is how one styles their websites initially I thought maybe everything is draw  on a app then it is taken as a picture or animation then put on top of buttons, but also CSS makes it possible to create high quality buttons and texts. </p>
  <p><span style="text-decoration: underline;"><strong>Reflection on the reading and lecture.</strong></span></p>
  <p>The reading on Convention and Context, the video about bad doors and the lecture about interactions link up perfectly into my understanding of user interface (UI) and user experience (UX), the one that interests me the most is the bad doors video as for example why would one need to have a handle on a door that is meant to be pushed without having just a flat surface which would automatically tell the person to push the door as there is no other way to interact with the door. I have ran through many of there situations while using websites that some features in the website could have been made easier than they needed to have been but and thus causing one to be annoyed of the website because it ends up being a time waster unintentionally, thus the User Experience being bad and not exciting at all thus most times design must be fairly simple and straight forward and not try make something more confusing in order to make it look like something else, just because its a door does not mean it has to have handles on both sides , the design must be made to suit its function other than conventions known of doors to have handles, the UI design must suit the end goal and make it easier to see what to do way before you attempt to do something which will in return yield a great user experience.
      
      <p><strong><span style="text-decoration: underline;">References</span></strong></p>
  <p>Mailloux, S. 1983. Convention and context. New Literary History, 14(2), pp.399-407.&nbsp;</p>`;


  const blog3 = document.getElementById("readmoreText3");
  blog3.innerHTML = `<p><strong><span style="text-decoration: underline;">Reflection on readings.b</span></strong></p>
  <p>The first reading I engaged on is the basic principles of user interface design which interested me the most of all the reading this far as lately I have noticed how frustrating it is to use some websites and apps that when I need to perform a particular action I quickly get irritated with the interface as it has too many steps to undertake in order to perform a task I intend to do, as stated simplicity and having to perform as little of clicks as possible would be really handy and very vital in capturing the interest of users, being minimal too with information, the shorter the better I find much more fun and nicer with less information to process. What really stuck to me is the use of certain images like bell icons and so on that there is a certain expectation with certain icons that must be kept with the knowledge gained from using other sites and apps and must be kept as know by the majority which I totally agree on. </p>
  <p><span style="text-decoration: underline;"><strong>How do my wireframes hold up against the reading and lectures on UI</strong></span></p>
  <p>My initial wireframes had different uses for certain icons which in general mean another thing, so I had to change up how they are used and the functions they have, the wireframes were a bit clustered and as I am reading on the principles of design, I bumped on the point where simplicity is key and is way better than anything complicated requires less thinking and analyses from the user to easily browse through and find exactly what they want quick taking into account that this is a portfolio website the user is mostly interested to see my capabilities with the website rather than the content and if they easily use the website to find everything they want to find out, therefore currently that is my main focus making it easier to navigate through the website.&nbsp;</p>
  <p>&nbsp;</p>
  <p><strong><span style="text-decoration: underline;">References </span></strong></p>
  <p>Uxpin. (2020). The Basic Principles of User Interface Design. The Basic Principles of User Interface Design (uxpin.com)Links to an external site.. 18 March 2023.&nbsp;</p>`;


  const blog6 = document.getElementById("readmoreText6");
  blog6.innerHTML = `
  <p><strong><span style="text-decoration: underline;">Experience continuing development of my website</span></strong></p>
  <p>As I am wrapping up my website, I have had plenty of fun and struggles to get to the end of the website, I have had tonnes of fun in seeing the website fall into place one code at a time and every save made and having to see the website become something I had initially planned with few changes from the original thought of how it will look,  the struggles of certain looks I wanted to execute on the website but could not pull them off forcing me to leave them off and change to different looks. </p>
  <p><span style="text-decoration: underline;"><strong>IxD Process Mashup lecture</strong></span></p>
  <p>Goal Alignment - My goal with the website is to make a website that is not frustrating to use that has thousands of links to get to certain sections or read what the user need to read, thus making a very simple minimal click website with access to everything in the website very simply, since my user will be a teacher wanting to see my work on the website and my content I have to make sure that it is easy to read my work and understand without any problems.

      <p>User Flow - I have not looked at this directly as in focus on it solely but have thought about how I will structure my content in terms of simple logical fashion that the user wants to see my work first decide whether they like it or not then will head to my about section to find out me about me if they are interested in me then finally reach conclusion to head to my contact section if they would like to work with me.</p>
      
      <p>Interface Elements - I have included Input controls but minimal and also Nav components, the information components not as much as the website is straight forward and nothing complicated that need explanations on what to do it is pretty much scroll and read and is very minimal on physical user interaction it is mostly visual.</p> 
      
      <p>Overall the process of making the website is going great and is shaping up well currently enjoying the process and sleepless nights.
          
          <p><strong><span style="text-decoration: underline;">References</span></strong></p>
  <p>Goldberg, P., n.d. Ethics of UX Practice, s.l.: s.n.</p>

      <p>Tractinsky, M. H. &. N., 2006. User experience - a research agenda. Behaviour & Information Technology, 25(2), p. 91 – 97.&nbsp;</p>`;


  const blog7 = document.getElementById("readmoreText7");
  blog7.innerHTML = `
  <p><strong><span style="text-decoration: underline;">Reading One - Graham et al. - 2015 - Towards a study of information geographies</span></strong></p>
  <p>This reading has made me aware of the scarcity to the internet that it is almost impossible for certain regions in the world to afford or even access the internet, and even though the access to the internet is easier in certain areas it remains that other people still dont manage to buy/pay for the internet this is evident with the fact that countries like Japan China and India combined use the internet more than the whole of northern america, and taking a look at african countries only a hand full have access to the internet and only a few have salaries that can afford the expense of internet costing people in africa around 20 percent of their salary if they are in properly developing countries, this leaves more than 70% of Africans with no access to the internet thus no access to information and knowledge. </p>
  <p><span style="text-decoration: underline;"><strong>Reading Two - Ballatore et al. - 2017 - Digital Hegemonies The Localness of Search Engine</strong></span></p>
  <p>This reading made me aware of the shortage of Africans producing resources on the WWW, this is accurate and makes sense that content producing countries are first world countries and african countries for example are only just consumers of content on the web and produce not so much. There are other reasons as to why this is the case but one that links the previous reading to this reading is that there is not enough distribution of internet to poor currency wise and power wise regions  of the world and african is part of those regions and I believe this is one of the biggest cause of this and thus why ive noticed most times when searching the web the searches one finds are mostly written outside of my local area thus im always subjected to foreign views and knowledge and not knowledge that generated by my own country as there is so little of it available.
      
      <p><strong><span style="text-decoration: underline;">References</span></strong></p>
  <p>Ballatore, A., Graham, M. and Sen, S., 2017. Digital hegemonies: the localness of search engine results. Annals of the American Association of Geographers, 107(5), pp.1194-1215.</p>

     <p> Graham, M., De Sabbata, S. and Zook, M.A., 2015. Towards a study of information geographies:(im) mutable augmentations and a mapping of the geographies of information. Geo: Geography and environment, 2(1), pp.88-105.&nbsp;</p>`;


  const blog8 = document.getElementById("readmoreText8");
  blog8.innerHTML = `
  <p><strong><span style="text-decoration: underline;">Development of website</span></strong></p>
  <p>Looking at this week's in-person technical lesson on reviews made me want to use this reviews exercise for my website in the blogs section instead of having my reviews all lined up and not being able to scroll through the content to find it would just cloud and fill my website with the blog section thus having to be able to navigate week to week with perhaps a scroll alone will be efficient and suit the website much better. </p>
  <p><span style="text-decoration: underline;"><strong>Reflection on the reading</strong></span></p>
  <p>The reading for this week was "How Geography Shapes-and is Shaped by the Internet" which discusses the communication costs, transportation costs, and search costs, and how the internet affects these elements depending on the geographical area one is in.<p>The internet in certain areas for example in Africa is a scarce resource, thus and access to the internet is extremely difficult and almost impossible in some regions even if there is a connection to the internet the network is terrible that the web is explorable in its full intended way. The pricing of the internet in Africa is so high that it becomes a luxury to the people thus having most people and businesses not being able to expand in the digital world and share their businesses worldwide but only limited locally and word of mouth as this is much cheaper and cost-effective than being on the internet</p> 
  
  <p><strong><span style="text-decoration: underline;">References</span></strong></p>
  <p>Uxpin. (2020). The Basic Principles of User Interface Design. The Basic Principles of User Interface Design (<a href="https://www.uxpin.com/">uxpin.com</a> )Links to an external site.. 18 March 2023.&nbsp;</p>`;


  const blog9 = document.getElementById("readmoreText9");
  blog9.innerHTML = `
  <p><strong><span style="text-decoration: underline;">Development of Website</span></strong></p>
  <p>The implementation of the new blog section that is scrollable is an success as the blogs will be viewed one by one on each scroll which saves alot of space in the website thus making section much compressed and closer to each other than having a website that infinitely scrolls down to get to the section one wants which was raised as a problem in my first website submission. </p>
  <p><span style="text-decoration: underline;"><strong>Reflection on the reading</strong></span></p>
  <p>The reading chosen for this week is "Algorithmic Colonization of Africa" This reading covers the difference between traditional and algorithmic colonization, and explains that traditional colonization is more towards brute force from government and political forces, while algorithmic colonization is driven by cooperation agendas. This is just as terrible as traditional colonialism as this targets people on the web, that the AI's will target certain people and not give them the best chances that the activities done on the internet fail compared to anyone of different identity that the algorithm supports. Thus making the World Wide Web not a fair place to even try and compete with other companies that are established on the Web as there are tools built to make this close to impossible to do unless you get your company or content know first by word of mouth.
      
      <p><strong><span style="text-decoration: underline;">References</span></strong></p>
  <p>Forman, C & Goldfarb A. & Greenstein, S. 2018. How geography shapes-and is shaped by-the internet. The new Oxford handbook of economic geography, 269.
      <p>Abeba Birhane, 2020, “Algorithmic Colonization of Africa”, SCRIPTed Volume 17 Issue 2 (p389-p409) URL:  https://script-ed.org/?p=3888DOI: 10.2966/scrip.170220.389 [last accessed: 03/05/2023].&nbsp;</p>`;


  const blog12 = document.getElementById("readmoreText12");
  blog12.innerHTML = `
  <p><strong><span style="text-decoration: underline;">Reflection on readings</span></strong></p>
  <p>The first reading is "Internet Access being a fundamental right" as stated in the article that this is a crucial need taking into account the time of the pandemic that there was close to zero contact with other people and all interactions were made on the internet, what happens to the people that do not have access to the internet as it is expensive they had no updates and no forms of communication with other people as everyone was in isolation. This effect was mainly felt in students in South Africa too as there is no internet access to majority of the population therefore some students had to not participate in tertiary institutions as they could not have access to work content from universities, this is one of the reasons access to the internet is need instead of awant as now it plays a role in our daily lives and more and more information is shared on the Web thus not having access to the internet is being denied access to knowledge, this is expressed to the reading "The Need for Global Internet Connectivity"  which further exaggerates the need of internet connection as it comes with consequences when people are excluded from the Web like mentioned above that some students could not take part in academic year as they could simply not afford means to purchase data to be active on the Web.
      
      <p><strong><span style="text-decoration: underline;">References</span></strong></p>
  <p>Kasapis - 2020 - Internet Access is a Fundamental Right.pdf </p>
   <p>Daniolou - 2020 - The Need for Global Internet Connectivity.pdf </p>
      &nbsp;</p>`;


  const essay = document.getElementById("essayStuff");
  essay.innerHTML = `
  <p class="essayContent">The South African Social Security Agency (SASSA) is a government agency tasked with providing
      social security benefits to eligible South African citizens. One of the ways SASSA provides access to
      information about social grants is through its website, sassa.gov.za. However, the site's user
      interface (UI) and user experience (UX) fall short of modern standards, making it difficult for users to
      easily navigate and access the information they need. In this essay, we will explore the issues with
      the UI and UX of sassa.gov.za and the ethical concerns arising from the site's design.</p> 

      <p class="essayContent">&nbsp</p>

      <p class="essayContent">Firstly, I am going to critically analyse the User Interface (UI) by firstly starting of with the overall
      design of the page, it is decently designed visually but the colour combination of yellow and white is
      not as pleasant, and the colour code is probably used in this manner to match the colours of the
      leading party, with this colour code of yellow and white it is not a good look on the eyes it looks like
      an old design and there is also a large amount of white space around the contents of the website as
      if the website was not properly optimised for desktop use as there is too much margin being used on
      the desktop version than the mobile version of the website, on the mobile version of the website the
      spacings and sizes of the images used are appropriate as if initially the website was made to be
      viewed on mobile devices than on a desktop which is not a bad feature of the website as the use of
      mobile devices in South African outweighs the use of desktops as mobile devices are more
      affordable than the desktops and the people that make use of the South African Social Security
      Agency do not have access to desktop and depend of grant from the government to be able to live
      and survive on a daily basis. The design of the navigation tab is not as good as one would have
      wanted it to be as the Nav bar does not follow you and you end up having to scroll back up the page
      in order to access the navigation tab which is annoying an unpleasant would have much more sense
      and made it easier if no matter where you are in the website you easily navigate around the website
      without having to scroll back up to where is place thus having a fixed placed navigation tab would be
      of a great User Experience (UX) design and make it much more enjoyable to use the website and
      much less of a hustle to go around the website, the website that I have made makes use the
      navigation bar that is always visible to the user no matter the circumstances and I believe this is
      necessary to have in every website that the nav bar is always there for the user. The only navigation
      bar that is always visible is the live chat which is poorly placed on the right hand side of the website
      and seems out of place making it look extremely bad which could have been substituted for a popup
      on the bottom right of the website with a small/medium sized telephone sign labelled live chat
      button to better signal to user that there is a chat function or even better a live chat that floating on
      the bottom right hand side of the page where the user just goes and types their issues and are able
      to receive help as soon as possible.</p>

      <p class="essayContent">&nbsp</p>


      <p class="essayContent">The way the website is structured with the abundance of white spaces on the sides of the website, I
      believe this causes the website to be more clustered together as there is not enough space making
      the images they use be very tiny and of low quality resulting longer in web pages than necessary
      with very small amounts of text to label each of the images used thus affecting the appearance of
      the website overall and making it look like a very sub-average website. On the topic about bad doors
      the mobile version of the website definitely has various bad door designs as the drop down
      navigation bar when clicked when one clicks on this the live chat feature of the website covers other
      clickable drop down options requiring the user to strategically scroll on the website in order for the
      website live chat feature doesn’t cover the additional drop down feature which will cause frustration
      while in use of the website, this frustration is also continued as you scroll down the website and get
      onto the section whereby there is a social media section with the twitter pages of the SASSA, once
      you get to this section and you try and scroll and it so happens that when you want to go futher
      down the pages you will notice the social media page is the once that is moving thus requiring you to
      look for some small parts of the website that do not include the social media place in order to scroll
      futher down the website, which is bad design which this could be avoided by requiring the user to
      use two fingers in order to scroll through the social media pages the offer on the website.</p>

      <p class="essayContent">&nbsp</p>


      <p class="essayContent">In terms of use of icons appropriately on the website they done a good job in terms of use of icons
      and none of the icons pressed does a particular function that seems odd than expected, thus
      following the steps by the basic principles of user interface design[1], this is important to make sure
      it is followed as the website will be visited by users that are not always active on the world wide web
      and if they can associate some of the icons used on the website to the icons they have used before
      on other applications like Whatsapp, Facebook or Twitter the better it will be for them as they do
      not have to struggle to get around the website as much.</p>

      <p class="essayContent">&nbsp</p>


      <p class="essayContent">The website overall does not totally violate ethics of user as the website does not have any dark
      patterns to try and lure the user or to try force and error from the user that will cost them
      financially, but I have noticed that the website has a tendency to get the user irritated from using
      the website as the website doesn’t follow the principals of design fully that the website should have
      at maximum 3 clicks to get to a point the user wants to get too but instead the website will send you
      from one page to another even as far as you click along thinking you getting somewhere but end up
      being redirected to a PDF that that has more info as to how to get what you want done, which is not
      right ethically as already the people that use this website are frustrated by their living conditions and
      most have not had decent education to use the website yet there is an unending linking every click
      that I myself got easily annoyed by trying to find ways to apply for grants, this makes the website not
      properly made for its target audience and users and somehow fail the people who depend on SASSA.
      The final ethical issue is that the website is targeted at the black majority of the country yet the
      website is run using English and doesn’t cater for user that speak their home languages assuming
      everyone is familiar with English and understand English which is totally incorrect as statistics show
      that English is 6th common language in South Africa with 8% of the population using it to
      communicate at home[2], thus making people that cannot read and understand English not be able
      to use the website just because they lack knowledge in the English language.</p>

      <p class="essayContent">&nbsp</p>


      <p class="essayContent">In conclusion, the website of the South African Social Security Agency (SASSA) has issues with its user
      interface (UI) and user experience (UX) that hinder easy navigation and access to information for
      users. The website's overall design is visually decent, but the yellow and white colour combination is
      not pleasing, and the abundant white space on the desktop version makes it look clustered. The
      navigation tab is poorly designed, and the live chat function is poorly placed, making it look out of
      place. The mobile version of the website has bad door designs that frustrate users when trying to
      access different features. However, the use of icons is appropriate and easy for users to associate
      with other applications. The website does not violate ethical principles, but its poor design may
      irritate users. Overall, the SASSA website needs a redesign to improve its UI and UX to provide better
      access to the social security information for South African citizens.</p>

      <p class="essayContent">&nbsp</p>


      <p class="essayContent">References</p>

      <p class="essayContent">&nbsp</p>


      <p class="essayContent">[1] UXPin (2023) The basic principles of User Interface Design, Studio by UXPin. Available
      at: https://www.uxpin.com/studio/blog/ui-design-principles/ (Accessed: April 30, 2023).</p>

      <p class="essayContent">&nbsp</p>

      <p class="essayContent"> [2] Nkanjeni, U. (2019) Only 8% of South Africans speak English at home - report,
      TimesLIVE. TimesLIVE. Available at: https://www.timeslive.co.za/news/south-africa/2019-06-
      05-only-8-of-south-africans-speak-english-at-home-report/ (Accessed: April 30, 2023).</p>`;

      const essay1 = document.getElementById("essayStuff1");
      essay1.innerHTML = `<p class="essayContent">The statement by the CAIS “Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.” Raises concerns about the use of algorithmic culture and AI in modern-day society, and there are efforts made to try and contain the growth of these aspects and try by all means to have control over these tools as they are expanding faster than we are able to understand and comprehend how they work. But are AI’s and the algorithmic culture something we should be concerned about? </p>

      <p class="essayContent">&nbsp</p>
     
      <p class="essayContent">There have been several concerns about AI and the algorithmic culture that they pose a threat to society and put our lives in danger, the use of AI was thought to be used in a manner where small tasks that are simple and repetitive tasks [1] but have been improving over time that they far exceeding the expectations that were placed on them. Taking a looking at the definition of Internet Ethics being that, this is the analysis of the role the Internet plays in the development of the good life, which is the type of life we want for ourselves with respect to whether the Internet is playing a constructive role in our lives or not (Santa Clara University, 2018).</p>

      <p class="essayContent">&nbsp</p>
     
      <p class="essayContent">As stated above, there have been improvements on AI’s and Algorithms making them reach territories none of us have imagined and having to be able to perform unimaginable tasks, making them highly capable tools that even businesses have started to use these tools abilities. But this is where the ethical concerns arise from as now companies have begun replacing workers in exchange for the use AI’s for tasks that humans usually perform, a simple example of this case where there are signs of AI’s slowly replacing human beings is calls to big companies, when one places a call to a tech giant (Apple) to make enquires instead of the old technology of being asked to press certain buttons on a call to be directed to the right people to assist you, there has been a change to this process as now you have direct conversation with the AI as is gathers information from you as you communicate with it and can respond to you as you give it information on what you are trying to achieve as you place the call. This task could have easily been done by a human being but instead is being done by an AI which replaced a human being in this instance, causing unemployment. This is linked very closely with the statement placed by CAIS as they fear extinction from AI which does not necessarily mean extinction in the form of death but can also mean extinction in the form of human beings no longer being part of society and having control over what and how things are created which make no ethical sense as now AI will be in charge of our daily lives, yet these tools can be created to work in a manner that benefits a certain group of people.</p>

      <p class="essayContent">&nbsp</p>

      <p class="essayContent">There have been calls by the fathers of this technology and expects in the field to try to slow down and bring it to a halt and have the AI being regulated and monitored, which makes absolutely no sense as to why the makers of these tools would want to have regulations and have so many concerns over their own technology they have made. It turns out that these tools are improving themselves without the creators being able to control the direction in which the AI is heading. This makes sense as AI is left with the duty of making decisions that are important and not knowing how initially they were made, their decisions could be biased in favour of certain stereotypes, views, and in some instances even worse being racist, like for example the google “gorillas” where it would label black people as gorillas. It cannot be that we can have these algorithms and AI’s create content faster than we can blink teaching future generations false information as AI will now make this true.</p>

      <p class="essayContent">&nbsp</p>

      <p class="essayContent">This brings into light the creation of fake citations (Welborn, 2023) by AI, and as stated in one of our lectures in the Digital Arts building by one of my colleagues that AI is falsely crediting authors for work and words they did not make. This is unethical as this can tarnish an author’s name as people will think one of the authors they know wrote has some type of view and understanding which they don’t as AI is falsely crediting them to work they did not make in order to gain credibility using someone who is high profiled. This can potentially end an author’s career if AI is thoroughly regulated and is fully understood and is allowed to continue its usage across all platforms without any quality assurance thus saying some of the bad actions that put human lives and careers in danger at risk, now the question that would be important is that which people will it choose to be unfair to? And which people the AI and algorithms will ruin their lives? Will it be biased in whom it chooses to ruin? This is not unreasonable to think about as we already have cases of simple algorithms already having bias and unfairness toward certain types of people. </p>

      <p class="essayContent">&nbsp</p>

      <p class="essayContent">This further advocate for the statement made by the CAIS that trying to reduce the risks of being extinct from AI and algorithms is necessary as they possess evil in them, which badly represents people and chooses who it properly treats, instead of being fair and acting in an appropriate manner for every situation without having to choose. One way in which AI and algorithms used can be regulated is to educate each other and ourselves on their social and ethical associations to decide on what regulations should be implemented and also decide what role the technology is going to play, I believe this will solve most problems and concerns that are currently at hand with AI and algorithms in order to keep track and be aware of what the AI and algorithms are doing, unlike some current algorithms which have multiple functionalities and can perform, improve and learn overtime themselves without being programmed to perform a certain task and we do not know what exactly it is learning and how it will use this information learned.</p>

      <p class="essayContent">&nbsp</p>

      <p class="essayContent">Finally, the fast growth of artificial intelligence and algorithmic culture has sparked worries about their influence on society. While these technologies have demonstrated impressive capabilities and potential advantages, they also raise substantial ethical concerns. The growing use of artificial intelligence to replace human labour, for example, raises concerns about job loss and loss of control over essential areas of our everyday life. Furthermore, AI's ability to make judgments and develop on its own without complete comprehension by its designers raises concerns about prejudice, injustice, and possible harm to people and society as a whole.</>

      <p class="essayContent">&nbsp</p>

      <p class="essayContent">The CAIS's proposal to prioritize AI risk mitigation alongside other societal-scale risks indicates an awareness that unrestrained AI growth and deployment might result in unforeseen effects, including the marginalization of humans in decision-making processes. Instances of AI-generated citations and biased algorithms highlight the importance of regulation and quality assurance in ensuring fairness and accountability.</>

      <p class="essayContent">&nbsp</p>

      <p class="essayContent">To address these issues, society must continue to educate and discuss the social and ethical consequences of AI and algorithms. We can jointly set acceptable restrictions and govern the role that technology should play by understanding their associations and influence. This proactive strategy will assist in mitigating the dangers connected with AI and algorithms, allowing us to capitalize on their potential while ensuring they match our values and serve the general good.</>

      <p class="essayContent">&nbsp</p>

      <p class="essayContent">References</p>

      <p class="essayContent">&nbsp</p>
     
      <p class="essayContent">
      <p class="essayContent"> [1] Pazzanese, C. (2020). Ethical concerns mount as AI takes bigger decision-making role. [online] Harvard Gazette. Available at: https://news.harvard.edu/gazette/story/2020/10/ethical-concerns-mount-as-ai-takes-bigger-decision-making-role/.</p>

      <p class="essayContent">&nbsp</p>
      
      <p class="essayContent"> [2] Santa Clara University (2018). What is Internet Ethics? - Markkula Center for Applied Ethics. [online] Scu.edu. Available at: https://www.scu.edu/ethics/focus-areas/internet-ethics/resources/what-is-internet-ethics/.</p>
      
      <p class="essayContent">&nbsp</p>
      
      <p class="essayContent"> [3] Welborn, A. (2023). ChatGPT and Fake Citations. [online] Duke University Libraries Blogs. Available at: https://blogs.library.duke.edu/blog/2023/03/09/chatgpt-and-fake-citations/.</p>
      
      <p class="essayContent">&nbsp</p>
      
      <p class="essayContent"> [4] www.safe.ai. (n.d.). Statement on AI Risk | CAIS. [online] Available at: https://www.safe.ai/statement-on-ai-risk#open-letter.</p>`;