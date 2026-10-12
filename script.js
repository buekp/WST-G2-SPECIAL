const cards = document.querySelectorAll(".ac");
const modal = document.querySelector("#answer-modal");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const closeButton = document.querySelector(".bk-x");
const cover = document.querySelector("#bk-cover");
const openBook = document.querySelector("#bk-open");
const pages = document.querySelector("#bk-pages");
const pageContent = document.querySelector("#bk-content");
const pageCount = document.querySelector("#bk-count");
const pageLabel = document.querySelector("#bk-label");
const prevButton = document.querySelector("#bk-prev");
const nextButton = document.querySelector("#bk-next");
const pageArea = document.querySelector("#bk-page");
const solidumStory = document.querySelector("#solidum-story");
const rubiteStory = document.querySelector("#rubite-story");
const floresStory = document.querySelector("#flores-story");
const ompalingStory = document.querySelector("#ompaling-story");
const modalDialog = modal.querySelector('[role="dialog"]');

let currentPage = 0;
let previousCard = null;
let pageChanging = false;
let changeTimer;

function numberedPhotos(folder, prefix, count) {
    return Array.from(
        { length: count },
        (_, index) => `assets/filio/${folder}/${prefix}${index + 1}.jpg`
    );
}

const stories = [
    {
        label: "FRIENDS",
        title: "The people<br>who make it matter.",
        note: "01 / THE PEOPLE I KEEP",
        text: "Some memories become special because of the people who are part of them.",
        photos: numberedPhotos("friends", "f", 4),
        video: "assets/filio/trio.mp4",
        shape: "bk-shape-1",
        poem: `I used to think people became special the moment they entered my life.

They slipped into ordinary days so quietly that I barely noticed the world changing around them. A joke became a ritual. A random place became somewhere I could recognize with my eyes closed. A photograph became evidence that, for a little while, we all existed in the same small universe.

Sometimes I look at these pictures and feel something almost unsettling: everyone in them was living a whole life I could never completely see. Private fears. Secret thoughts. Days they smiled when they were tired. We stood beside each other, unaware of how much we were carrying beneath the surface.

I keep these memories because they prove that I was there. I laughed until my face hurt. I let people close. I trusted the moment enough to forget that moments are temporary.

But people change. Paths separate. Even the closest voices can become unfamiliar with time. It is strange how someone can once know the smallest details about you and later become a name you hesitate before mentioning.

I do not want to remember only how things ended, or turn every goodbye into a ghost that follows me. I want to remember the warmth, the stupid little jokes, and the versions of ourselves that existed only when we were together.

Maybe that is the frightening part of loving people: we never know which ordinary day will become the one we wish we could return to.

If I had known these moments would eventually become memories, I think I would still have chosen them. I would still have laughed. I would still have cared.

Some people do not stay forever. Somehow, they still leave pieces of forever behind.`
    },
    {
        label: "MYSELF",
        title: "Getting to<br>know me.",
        note: "02 / THE PERSON I AM",
        text: "A collection of the different sides of me, including the things I show and the things I am still learning to understand.",
        photos: numberedPhotos("myself", "m", 4),
        video: "assets/filio/me.mp4",
        shape: "bk-shape-2",
        poem: `There are days when I look at myself and feel like I am meeting a stranger who happens to know all my secrets.

I recognize the face, the habits, the little things I do without thinking. But the person behind them can feel distant, like a room in my own house that I have been avoiding for years.

My mind has a talent for making ordinary silence feel dangerous. It replays old mistakes like evidence. It invents conversations and prepares me for disasters that have not happened. Sometimes it speaks with such certainty that I forget a thought can be loud without being true.

It tells me I am too much and never enough. That everyone can see the cracks. That if I stop pretending I am fine, even for a second, everything I have carefully arranged will fall apart.

I wonder how much of my personality grew from the things I liked, and how much grew from trying to survive the things I could not explain. There are childhood versions of me hiding in old photographs—smaller, unaware, looking toward a future she could not possibly understand. I wish I could tell her that she does not need to become perfect to deserve a gentle life.

I am not only the person I become when I am afraid. I am also the girl who gets excited over music, who finds comfort in familiar places, who laughs at ridiculous things, who keeps collecting little pieces of a life even when her thoughts insist nothing is enough.

I am more than the worst sentence my mind has ever said about me. More than my regrets, my awkward phases, my unfinished plans, and the versions of me I have already outgrown.

For a long time, I thought being special meant becoming someone impressive enough to be remembered. Someone easier to love. Someone who never needed reassurance.

Now I am beginning to suspect that I have been treating myself like a problem to solve instead of a person to know.

Maybe I do not have to become someone else to be worth meeting.

Maybe the person I keep searching for is not hidden in some future version of me.

Maybe she has been here all along, waiting for me to stop looking at her like an unfinished mistake.`
    },
    {
        label: "THE SHIFT",
        title: "Things don't<br>stay the same.",
        note: "03 / CHANGING PERSPECTIVES",
        text: "Some things begin to mean something different as time passes. The way I see people, memories, and myself can change, too.",
        photos: numberedPhotos("the-shift", "s", 4),
        video: null,
        shape: "bk-shape-3",
        poem: `Nothing stays the way it first arrives.

People change. Hair grows back or gets cut away. Old interests become unfamiliar; new ones take their place. Even the smallest things can mark a before and after, though nobody else would know to call them important.

I used to think change would announce itself. I imagined a clear ending, a final conversation, a moment dramatic enough to explain why everything felt different afterward.

But sometimes change looks like a handful of hair on the floor. A song that suddenly means something else. A quiet day when you realize you no longer react to something that once could ruin your whole mood.

I used to think that if something mattered, it would stay. I treated leaving like proof that I had failed, as if caring hard enough could convince time to make an exception for me.

Now I wonder if that was fear trying to bargain with something that never made promises.

The unsettling thing is how ordinary the shift can be. No warning. No thunder. Just one day realizing that the old version of you would have made a different choice, and you cannot honestly pretend to be her anymore.

Sometimes I look at old pictures and wonder which version of me was the real one. The person who believed everything would stay familiar, or the person looking back now, trying to understand why the past still has a pulse.

Maybe both were real. Maybe every version of me was doing the best she could with what she knew at the time.

I am changing, too—my perspective, my priorities, the way I understand people, and the way I speak to myself when nobody is listening.

I do not want to mistake every change for a loss. Some things leave because they have finished teaching me what they can. Some things stay, but become something different in my hands.

Maybe growing up is not becoming unrecognizable.

Maybe it is learning to recognize yourself even after you have changed.`
    },
    {
        label: "REALITY CHECK",
        title: "Seeing things<br>for what they are.",
        note: "04 / WHAT I LEARNED",
        text: "Not every moment turns out the way I imagined. Sometimes, understanding what matters means learning to see things more clearly.",
        photos: numberedPhotos("reality-check", "r", 3),
        video: null,
        shape: "bk-shape-4",
        poem: `I used to search for reasons behind every hurt, as if every bad decision and every strange turn in life had been arranged to teach me something.

I wanted every difficult moment to become a lesson. Every ending needed a hidden meaning. Every risk needed to pay off, and every mistake needed to become worth it somehow.

But life does not always leave a note explaining what happened.

Some people disappoint you. Sometimes you disappoint yourself. Sometimes a choice looks harmless while you are making it, and only later do you notice the price attached to it. Sometimes luck arrives like a blessing, and sometimes it leaves before you have figured out what to do with it.

It is easy to mistake a lucky moment for proof that you are in control. It is easy to keep chasing the feeling, convinced that the next try will make the last one make sense. I know how tempting it can be to believe that one more answer, one more chance, one more little win will settle something restless inside you.

But not everything that feels good is good for you. Not every loss is a sign that you should try harder. And not every win means you have found a way to outsmart the world.

My mind still puts old scenes on trial. It asks what I missed, what I should have done, and why I did not see things coming. The questions circle until even the truth starts to feel like another locked door.

There is something frightening about how easily reflection can become punishment. I can call it learning, call it curiosity, call it trying to understand—but sometimes I am only reopening a wound because uncertainty feels worse than pain I already recognize.

I am learning to look at things without turning them into a verdict on who I am. I can admit when I made a mistake without making myself the mistake. I can accept that something happened without pretending it was fair or pretending it did not matter.

Reality is not always gentle, and I do not have to decorate it to make it easier to face.

Sometimes clarity is not finding the perfect explanation.

Sometimes it is knowing when to stop chasing an answer that keeps asking for more than I can afford to give.`
    },
    {
        label: "ESCAPE",
        title: "A place<br>to breathe.",
        note: "05 / MY LITTLE ESCAPES",
        text: "The little things that give me space to pause, breathe, and return to the world when I am ready.",
        photos: numberedPhotos("escape", "e", 3),
        video: null,
        shape: "bk-shape-5",
        poem: `Sometimes I disappear into music, dim rooms, and places where the sky seems too wide for my thoughts to follow me.

Not because everything becomes better there, but because for a little while the world stops asking me to explain myself.

My thoughts still come with me. They turn small worries into disasters and old memories into warnings. I can stand somewhere beautiful and still feel like I am watching my own life from behind glass, close enough to see it, too far away to touch it properly.

Sometimes I play the same song until it feels less like music and more like a place I know how to return to. The lyrics say things I cannot explain without making them sound smaller than they are. The noise fills the room before my thoughts can.

I collect little escapes: a playlist, a familiar view, a patch of green after a long day, a photograph of somewhere that made me pause. None of them can rescue me from being human. They do not erase what hurts or solve the things I have not figured out.

But they remind me that the world is not made entirely of things I need to survive.

There are still clouds moving without a destination. Trees growing without asking whether they are doing enough. Songs that do not demand an explanation before they let me feel something. Places that allow me to be quiet without treating my silence like a problem.

I used to think escape meant running away. Maybe sometimes it does. But I am learning the difference between hiding from my life and stepping away long enough to return to it with a little more room inside my chest.

I do not need to reach a breaking point before I am allowed to rest. I do not need to turn every feeling into a lesson or every quiet hour into something productive.

Sometimes I only need to breathe, let the song end, and notice that I am still here.

Maybe these little escapes are not doors out of my life.

Maybe they are the small doors that lead me back to myself.`
    },
    {
        label: "REALIZATION",
        title: "Maybe that's<br>what makes it special.",
        note: "06 / WHAT STAYS WITH ME",
        text: "Maybe something becomes special not because it is perfect, but because it means something to us.",
        photos: numberedPhotos("realization", "z", 2),
        video: null,
        shape: "bk-shape-6",
        poem: `I used to think special things were always somewhere outside of me.

I looked for them in people who stayed, in photographs that made me smile, in places I wanted to revisit, and in moments I wished I could keep sealed away from time.

I thought if I gathered enough good memories, I might finally feel complete. If enough people loved me, perhaps I would stop questioning whether I deserved it. If I became the right kind of person, maybe I would never have to feel like a stranger to myself again.

But memories cannot hold still just because I love them. People grow older. Places change. The little child in an old photograph becomes someone who has to make her own decisions, carry her own fears, and learn what the world can be like when nobody is there to explain it first.

Sometimes I look at those old pictures and feel a strange kind of grief—not because the moments were bad, but because I cannot step back into them. I can remember the room, the faces, the feeling of being smaller than the world. I cannot become that version of myself again.

And maybe I was never supposed to.

Somewhere between growing up and learning how to let things go, I began to understand that the things I love do not have to remain unchanged to matter. A memory can fade at the edges and still leave something behind. A person can become part of my story without being responsible for writing the rest of it.

And through every version of my life, there has been one person I kept bringing with me.

Me.

The person who kept going on days she did not feel brave. The person who made mistakes, outgrew old dreams, laughed at the wrong time, and learned to begin again without always knowing how. The person who kept searching for answers, even when the questions became exhausting.

I am not special because I have everything figured out. I am not special because I am always strong, always happy, or always certain of who I am.

Maybe it is in the way I keep growing. In the strange things I love. In the kindness I give when I remember to give some to myself. In the fact that I can look at an older version of me and feel tenderness instead of shame.

My friends are special. My memories are special. The little moments that changed me are special, too. But they do not create my worth. They matter because I was here to experience them—and I matter even when nobody is watching, even when no photograph proves what the day looked like.

I spent so long searching for something that would make my life feel meaningful that I almost overlooked the person living it.

Maybe I do not need to become unforgettable to be worth remembering. Maybe I do not need to earn my own place in the story.

The world will change. People will leave. Even I will keep becoming someone new.

But I do not want to spend the rest of my life abandoning myself every time I change.

Maybe special was never something I had to earn or become.

Maybe it was never waiting at the end of the search.

Maybe, after all this time, the person I was trying so hard to find was me all along.`
    }
];

function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function hideAllStories() {
    cover.hidden = true;
    pages.hidden = true;
    solidumStory.hidden = true;
    rubiteStory.hidden = true;
    floresStory.hidden = true;
    ompalingStory.hidden = true;
}

function openFilioBook() {
    currentPage = 0;
    pageChanging = false;
    clearTimeout(changeTimer);

    hideAllStories();
    cover.hidden = false;

    modalDialog.setAttribute("aria-label", "Filio's personal booklet");
    openModal();
    closeButton.focus();
}

function openRubiteStory() {
    clearTimeout(changeTimer);
    pageChanging = false;

    hideAllStories();
    rubiteStory.hidden = false;

    modalDialog.setAttribute("aria-label", "Rubite's story about Sultan Kösen");
    openModal();
    closeButton.focus();
}

function openOmpalingStory() {
    clearTimeout(changeTimer);
    pageChanging = false;

    hideAllStories();
    ompalingStory.hidden = false;

    modalDialog.setAttribute("aria-label", "Ompaling's story");
    openModal();
    closeButton.focus();
}

function openFloresStory() {
    clearTimeout(changeTimer);
    pageChanging = false;

    hideAllStories();
    floresStory.hidden = false;

    modalDialog.setAttribute("aria-label", "Flores J.'s story about her mom");
    openModal();
    closeButton.focus();
}

function openSolidumStory() {
    clearTimeout(changeTimer);
    pageChanging = false;

    hideAllStories();
    solidumStory.hidden = false;

    modalDialog.setAttribute("aria-label", "Solidum's story about her dogs");
    openModal();
    closeButton.focus();
}

function showPage(index) {
    if (pageChanging || index < 0 || index >= stories.length) {
        return;
    }

    currentPage = index;
    pageChanging = true;
    pageArea.classList.add("page-out");
    clearTimeout(changeTimer);

    changeTimer = setTimeout(function () {
        const story = stories[currentPage];

        pageCount.textContent =
            String(currentPage + 1).padStart(2, "0") +
            " / " +
            String(stories.length).padStart(2, "0");

        pageLabel.textContent = story.label;
        showStoryPage(story);

        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === stories.length - 1;

        pageArea.scrollTop = 0;
        pageArea.classList.remove("page-out");
        pageChanging = false;
    }, 220);
}

function makePhoto(photo, index, label) {
    const photoNumber = String(index + 1).padStart(2, "0");

    return `
        <figure class="bk-photo-frame">
            <img
                src="${photo}"
                alt="${label} memory ${index + 1}"
                loading="lazy"
                onerror="this.style.display='none'; this.parentElement.classList.add('photo-empty'); this.parentElement.textContent='PHOTO ${photoNumber}';"
            >
            <span class="bk-photo-number">${photoNumber}</span>
        </figure>
    `;
}

function makePoem(story) {
    const paragraphs = story.poem
        .split(/\n\s*\n/)
        .map(paragraph => paragraph.trim())
        .filter(Boolean);

    return `
        <section class="bk-poem-card">
            <div class="bk-poem-head">
                <span>FRAGMENTS OF THOUGHT</span>
                <span>✳</span>
            </div>
            <div class="bk-poem">
                ${paragraphs.map((paragraph, index) => {
                    const isFinal = index === paragraphs.length - 1;
                    const isStandalone = paragraph === "Me.";
                    const isEmphasis =
                        story.label === "REALIZATION" &&
                        paragraph.startsWith("Maybe, after all this time");

                    const classes = [
                        isFinal ? "bk-poem-final" : "",
                        isStandalone ? "bk-poem-standalone" : "",
                        isEmphasis ? "bk-poem-emphasis" : ""
                    ].filter(Boolean).join(" ");

                    return `<p${classes ? ` class="${classes}"` : ""}>${paragraph}</p>`;
                }).join("")}
            </div>
            <div class="bk-poem-foot"><i>BUEKP</i></div>
        </section>
    `;
}

function makePhotoLayout(story, photoHTML) {
    const videoHTML = story.video
        ? `
            <figure class="bk-video-card">
                <div class="bk-section-label">
                    <span>VIDEO MEMORY</span>
                    <span>${String(currentPage + 1).padStart(2, "0")}</span>
                </div>
                <video controls preload="metadata" playsinline>
                    <source src="${story.video}" type="video/mp4">
                    Your browser does not support this video.
                </video>
            </figure>
        `
        : "";

    return `
        <div class="bk-media-only">
            <div class="bk-photo-grid ${story.shape}">
                ${photoHTML}
            </div>
            ${videoHTML}
        </div>
    `;
}

function showStoryPage(story) {
    const photoHTML = story.photos
        .map((photo, index) => makePhoto(photo, index, story.label))
        .join("");

    pageContent.innerHTML = `
        ${makePhotoLayout(story, photoHTML)}

        <div class="bk-ornament" aria-hidden="true">
            <span></span>
            <span class="bk-ornament-center">✦</span>
            <span></span>
        </div>

        ${makePoem(story)}
    `;

    pageContent.querySelectorAll(".bk-video-card video").forEach(function (video) {
        video.addEventListener("error", function () {
            const source = video.querySelector("source");

            if (source && source.getAttribute("src")) {
                console.warn("Unable to load video:", source.getAttribute("src"));
            }
        });
    });
}

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        const member = card.dataset.member;
        previousCard = card;

        if (member === "rubite") {
            openRubiteStory();
            return;
        }

        if (member === "filio") {
            openFilioBook();
            return;
        }

        if (member === "ompaling") {
            openOmpalingStory();
            return;
        }

        if (member === "flores") {
            openFloresStory();
            return;
        }

        if (member === "solidum") {
            openSolidumStory();
        }
    });
});

openBook.addEventListener("click", function () {
    hideAllStories();
    pages.hidden = false;
    showPage(0);
});

prevButton.addEventListener("click", function () {
    showPage(currentPage - 1);
});

nextButton.addEventListener("click", function () {
    showPage(currentPage + 1);
});

closeButtons.forEach(function (button) {
    button.addEventListener("click", closeModal);
});

function closeModal() {
    if (!modal.classList.contains("is-open")) {
        return;
    }

    modal.classList.remove("is-open");
    hideAllStories();
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    pageChanging = false;
    clearTimeout(changeTimer);

    modal.querySelectorAll(".bk-video-card video").forEach(function (video) {
        video.pause();
    });

    if (previousCard) {
        previousCard.focus();
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

modal.addEventListener("click", function (event) {
    if (
        event.target === modal ||
        event.target.classList.contains("modal-bg")
    ) {
        closeModal();
    }
});

const ompalingSection = document.querySelector(".ompaling-section");

if (ompalingSection) {
    const floatingStickers =
        ompalingSection.querySelectorAll(".floating-sticker");

    const ompalingCardsContainer =
        ompalingSection.querySelector(".cards");

    const ompalingCards =
        ompalingSection.querySelectorAll(".card");

    const avoidDistance = 120;
    const returnDelay = 300;
    const originalPositions = [];

    floatingStickers.forEach(function (sticker) {
        const rect = sticker.getBoundingClientRect();
        const sectionRect = ompalingSection.getBoundingClientRect();

        originalPositions.push({
            left: rect.left - sectionRect.left,
            top: rect.top - sectionRect.top
        });

        sticker.dataset.avoiding = "false";
    });

    ompalingSection.addEventListener("mousemove", function (event) {
        const sectionRect = ompalingSection.getBoundingClientRect();

        floatingStickers.forEach(function (sticker, index) {
            const rect = sticker.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = centerX - event.clientX;
            const distanceY = centerY - event.clientY;

            const distance = Math.sqrt(
                distanceX * distanceX +
                distanceY * distanceY
            );

            if (distance < avoidDistance) {
                sticker.dataset.avoiding = "true";
                clearTimeout(sticker.returnTimer);

                const angle = Math.atan2(distanceY, distanceX);
                const jumpDistance = 140 + Math.random() * 100;

                let newX =
                    centerX +
                    Math.cos(angle) * jumpDistance -
                    rect.width / 2 -
                    sectionRect.left;

                let newY =
                    centerY +
                    Math.sin(angle) * jumpDistance -
                    rect.height / 2 -
                    sectionRect.top;

                const padding = 15;

                newX = Math.max(
                    padding,
                    Math.min(
                        ompalingSection.clientWidth -
                        rect.width -
                        padding,
                        newX
                    )
                );

                newY = Math.max(
                    padding,
                    Math.min(
                        ompalingSection.clientHeight -
                        rect.height -
                        padding,
                        newY
                    )
                );

                sticker.style.left = newX + "px";
                sticker.style.top = newY + "px";
                sticker.style.right = "auto";
            } else if (sticker.dataset.avoiding === "true") {
                sticker.dataset.avoiding = "false";
                clearTimeout(sticker.returnTimer);

                sticker.returnTimer = setTimeout(function () {
                    const original = originalPositions[index];

                    sticker.style.left = original.left + "px";
                    sticker.style.top = original.top + "px";
                    sticker.style.right = "auto";
                }, returnDelay);
            }
        });
    });

    if (ompalingCardsContainer) {
        ompalingCards.forEach(function (card) {
            card.addEventListener("mouseenter", function () {
                ompalingCardsContainer.classList.add("is-paused");
            });

            card.addEventListener("mouseleave", function () {
                ompalingCardsContainer.classList.remove("is-paused");
            });
        });
    }
}