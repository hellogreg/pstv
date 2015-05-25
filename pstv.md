# Reimagining the PSTV

> **To skip right to viewing my PSTV homescreen proof of concept, it's here:**
> ***http://hellogreg.github.io/pstv***

Let's get this out of the way, first. I've loved the idea of the PlayStation TV from [the moment Sony announced it](https://www.youtube.com/watch?v=rG5l78gbvpU). I was excited to finally play Persona 4 Golden and Danganronpa: Trigger Happy Havoc. (My wife and I usually play games together, so we rarely use handhelds.)

But Sony never seemed to share my PSTV enthusiasm. The console's operating system hasn't been updated from its last-gen, handheld roots. It's hardly been marketed in the US. It gets last billing (behind the PS4, PS3, and Vita) under "Systems" at [Sony's own site](https://www.playstation.com/en-us/). And with all the price cuts it's received since releasing in the US just last fall, the whole thing has just seemed like an inventory dump from Japanese overstock.

Maybe Sony thought, "We'll put it out there, just in case it catches on, but otherwise pretend the whole thing never happened." By giving the console no expectations, Sony is inoculated against any criticisms that the system underperformed.

I understand that. And I can see why they think it's a tough sell. It's not the most high-concept of devices. What does it do? What niche does it fill? Who is it for?

I want to help. I want to make the PSTV better. I want to help improve how it looks and works. I want to let people know that it exists, and then show them why they need it.

The PSTV can (and should) be...
- The ultimate gaming and streaming media travel companion.
- A great starter console, for infrequent gamers or parents nervous about spending too much money on a first gaming machine for their family.
- The Swiss Army knife of PlayStations, allowing gamers to play titles from every Sony console and handheld ever made: PS4 via Remote play, PS3 and PS2 via PlayStation Now, and Vita/PSP/PS1 games natively.

It already is some of those things. It just needs a little help with the others.

Now, I'm sure Sony's thought of much of this already. Maybe they just don't think it's worth investing too much time or money on something they considered dead on arrival.

But I think it's at least worth the risk of paying one person to be its champion -- for a couple of years, anyway. Re-frame the PSTV the way the Apple viewed the Apple TV. Call it "a hobby" for several years and slowly build its userbase, while still remaining free from sales expectations.


## Fixing the PSTV's User Interface

The user interface is just a part of user experience, and a device's homescreen is just a sliver of the user interface. But you have to start somewhere! So, I've redesigned the PSTV's homescreen to accomplish the following:

- Update it to share the same visual brand language as the current generation of Sony products (PS4, Bravia TVs, PlayStation mobile app, etc.).
- Reframe the PSTV as something other than just a Vita on a bigger screen.


### If It Quacks Like a Vita...

The PSTV’s internals are basically those of a Vita. But a device is not what makes it up. A device is how it’s used.

When the iPad was announced, it was ridiculed as just a big iPhone or iPod touch. Technically, that was true. Its internals were about the same, it shared the same OS, and it ran the same apps. But calling it a big iPhone was also wrong. The iPad was something different, because it’s used differently.

The PSTV is often referred to as just a Vita that plugs into your TV. And again, technically, that’s true, but wrong. Because the PSTV isn’t used in the same places or manner as a Vita, it’s not a Vita. It's not more or less. It's something else.

But the PSTV's current visual interface does look like the Vita’s. In fact it *is* the Vita interface, unaltered.

I'm sure this saved on design and development costs. But, as a result, its branding no longer matches the rest of the current generation of Sony’s consumer devices. (For example, the default system typeface is Rodin, the same as on the PlayStation 3.) And the Vita interface was originally designed to display on small screens, meaning that the type size and iconography of the PSTV are often larger than they need to be, when displayed on an HDTV.

### It's Too Touchy

My biggest issue with the Vita interface is that it was designed for touchscreen navigation, and not a controller, as the PSTV requires. This becomes an obstacle as soon as you reach the console's homescreen.

For a controller-navigated interface, items should be in a line or a grid. This makes directional pad and analog stick navigation logical and predictable. Up, down, left, and right all correspond to d-pad button presses or analog movements. 

On a touchscreen like the Vita, a grid is less important. That's how we wound up with the current PSTV homescreen, where application icons appear diagonally, from row to row:

-- 0 -- 0 -- 0 --
0 -- 0 -- 0 -- 0
-- 0 -- 0 -- 0 --

With the apps organized like this, trying to move the cursor from row to row is not only unpredictable, but it actually may move in the opposite horizontal direction from what’s intended.

Say you have the top-left application selected. If you press down on the d-pad or analog stick, which second-row app will be selected? It’s the leftmost one, but you’d have no way of knowing that until you actually tried it.

When moving down from the top row, the cursor moves left. When moving down from the middle row, the cursor then moves right. Moving up from the bottom, the cursor moves left. And moving up from the middle, the cursor moves right.

This means there’s no way to select the middle row's rightmost app directly from either the top or bottom row. “Unless you use the analog stick,” you may think — as I thought. But that’s not the case.

As mentioned above, if you pull straight down from the top row, the cursor will move to the app down one row and to the left. But if you pull down and to the right… the cursor will also move down and to the left!

Even though the icons aren’t placed in a strict vertical/horizontal grid, the PSTV (or Vita) thinks they are. It thinks the leftmost icons from each row are in a vertical line — and the second from each row, and the third. So, even if you pull down and at a bit of an angle, the cursor moves as if you’d just pulled straight down. This renders that fourth icon in the middle row accessible only by moving right from the third icon in that row. It makes more sense to actually put the icons in either a true grid (like the PS3’s XMB had) or a line (like the PS4 has).

### The PSTV Homescreen, Redesigned

To address all this, I've designed a PSTV homescreen proof of concept (***[http://hellogreg.github.io/pstv](http://hellogreg.github.io/pstv)***), where the look is much like that of the PS4, though the options for each app have been simplified from their PS4 counterparts. Navigate right or left, and then press the button appropriate for the action you wish to take.

I’ve sized and placed the interface elements on a grid that splits the screen into 64 units horizontally and 36 units vertically. You can view the grid by clicking the “Grid Background” button below the prototype. All the text has line heights that fit the grid. There are a few more aesthetic options for you to play with.

I’ve also kept one feature that the PSTV already has that the PS4 doesn’t: folders. When the folder app icon is selected, you can expand it to choose an app within.


## A Few More Unsolicited UI Suggestions

### Streamline launching and backing out of apps.

Say we want to enter the Network section of the PSTV's Settings app. To do so, we'd do the following:

1. Tap X (after selecting the Settings app)
2. Tap X again (to actually start the app)
3. Tap X again (to go into Network settings)

Simple enough -- except for the Vita-ish requirement to tap X twice to start the app: once to get to a pre-launch page (which should be eliminated on the PSTV), and then again to launch.

But say we want to back out of this section, completely close the Settings app, and then get back to the homescreen? The process should be something like this:

1. Tap Circle
2. Tap Circle
3. Tap Circle

or maybe this:

1. Tap PS Button

But what you have to do is this:

1. Tap Circle
2. Tap PS Button
3. Hold Circle (as the pre-launch page "peels" from the screen)
4. Move left (from the "Featured" page that now shows onscreen)

The first step is optional, if you don't want to revsit the main Settings page. But it shouldn't require three or four different actions to do one thing: go back.

This process is another artifact from the Vita. The page peeling makes a lot more sense on a touchscreen, as does the swiping left to get back to the homescreen. On a console, the process should be optimized for the controller.


### Update store navigation

- How do we easily get to the search button and the ellipses at the bottom right? Again, the interface was made for touch and quick scrolling. Should have a left-hand menu, like the other TV-based PlayStation consoles. You always know moving left takes you back to a higher level in the hierarchy.
- Only show games I can download in my download list.
- Highlight the PS+ games and discounts
- Are there games for sale that I can't actually play!? (Check this to verify.)


## Other Feature Additions (And A Couple Subtractions)

### Where's Netflix (and Spotify)?
The PSTV doesn’t need to be an Apple TV or Amazon Fire or even a Chromecast. But it does need to have Netflix.

I've got a half-dozen devices in my house on which I can watch Netflix. So why do I need another?

Maybe I don't. But the PSTV needs it, in part for the same reason some hotels have pools they know will rarely be used. People often make decisions based on what they think they might do. If you take away an option, you could lose them as customers.

Also, it is nice to have -- just in case. Being able to switch right from a game to movie without turning off my device or changing inputs on my TV is a nice little perk. Plus, Sony has the best Netflix interface.

For my summer vacation, I’m taking one portable media device with me. If the PSTV had Netflix and Spotify, it’d be a no-brainer. But instead, I’m bringing the Amazon Fire TV Stick, because I can use it to watch Netflix and listen to Prime Music on the road.


### PlayStation Retro Mode

> To see how a PlayStation retro mode might look, I made a couple of mockup screens for my PSTV prototype to demonstrate current and proposed retro looks for *Xenogears* and *Ridge Racer*:
> ***http://hellogreg.github.io/pstv***

This is more of a wishlist thing, but I think it would be a natural fit to make the PSTV the best way to experience (or re-experience) PlayStation Classics, since so many of them are available for the platform.

Nowadays, more and more people (like me) are spending hundreds of dollars to import devices like [the Framemeister](http://retrogaming.hazard-city.de/framemeister.html), which optimize old CRT-era games for display on HDTVs. Rather than stretching and blurring the games, these devices upscale them faithfully -- maintaining the aspect ratio and keeping all the color and detail that have inspired the new retro-style games of today. These devices even give the option of adding scanlines, to make the game look more like it would have on a classic CRT screen.

The PSTV could take the old 320x240 pixel PlayStation Classics and upscale them to 960x720 (pillarboxed on a 720p TV) or 1280x960 (windowboxed on a 1080p set), depending on TV resolution. There's obviously a market in appealing to gamers' nostalgia. And I know I'd love to have a way to play digital versions of all my old favorites on a console I already have connected to my main TV.


### Dump the PSTV Whitelist

Give users an option (maybe as an opt-in, so users know the risks) to render *all* Vita games playable -- or at least attempt-able! Just give a clear warning upon purchase or startup that they may not work correctly.

(*I understand that this may be a matter of licensing from third-party publishers. If that's the case, it could be a little trickier to nix the whitelist for those titles. Still, all first-party games should be exempt.*)


### Delete the "Featured" Page

I don't know if anyone ever does anything except skip right past this page. It also breaks the natural navigational flow; you don't see it when entering apps, but it's always there when you leave them. Plus, it looks like too much like it's the store, even though it's not. I would prefer if it were, or if it at least had a store search function.

