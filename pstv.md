# Reimagineering the PSTV





## User Interface

UX is solving problems! (Identify the problems...)

User interfaces are just a part of user experience, and a device's homescreen is just a sliver of the user interface. But you have to start somewhere! So, I've redesigned the PSTV's homescreen to solve the following problems:

- Visually brand it more closely to the current generation of Sony products. The PS3 and the PSP shared the XMB interface, but the PSTV's homescreen interface has almost nothing in common with the PS4's navigation -- despite the PSTV's close relationship with its big brother. This redesign brings it more in line with the PS4 and other Sony interfaces (e.g., Bravia TVs, the PlayStation mobile app, the PlayStation Store's web interface, etc.).
- Reestablish the PSTV as something other than "just a Vita" -- primarily by replacing the touch interface with a more controller-oriented one. Items should be arranged in a true grid, and not diagonally. Buttons should consistently have the same role (e.g., no more Circle, PS Button, hold Circle to exit Settings). Touch commands and animations (like peeling a page to close an app) should be used sparingly, if at all.s



## Fixing the PSTV's UI

> **View my PSTV homescreen prototype here:**
> ***http://hellogreg.github.io/pstv***

The user interface is just a part of user experience, and a device's homescreen is just a sliver of the user interface. But you have to start somewhere! So, I've redesigned the PSTV's homescreen to accomplish the following:

- Update it to share the same visual brand language as the current generation of Sony products.
- Establish PSTV as something other than just a Vita on a bigger screen.


### If It Quacks Like a Vita...

The PSTV’s internals are basically those of a Vita. But a device is not what makes it up. A device is how it’s used.

When the iPad was announced, it was ridiculed as just a big iPhone or iPod touch. Technically, that was true. Its internals were about the same, it shared the same OS, and it ran the same apps. But calling it a big iPhone was also wrong. The iPad was something different, because it’s used differently.

The PSTV is often referred to as just a Vita that plugs into your TV. And again, technically, that’s true, but wrong. Because the PSTV isn’t used in the same places or manner as a Vita, it’s not a Vita. It's not more or less. It's something else.

But the PSTV's current interface looks like the Vita’s. In fact it *is* the Vita interface, unaltered.

I'm sure this saved on design and development costs. But, as a result, the branding no longer matches the rest of the current generation of Sony’s consumer devices. The system typeface is Rodin, the same as on the PlayStation 3. The Vita interface was also made to display on small screens, meaning that the type size and iconography are often larger than they need to be for most users.

### Stop Being So Touchy

The biggest issue with the Vita interface is that it was designed for touchscreen navigation, and not a controller, as the PSTV requires. This becomes an obstacle as soon as you turn the console on and reach the homescreen.

For a controller-navigated interface, items should be in a grid. This makes directional pad and analog stick navigation logical and predictable. Up, down, left, and right all correspond to d-pad button presses or analog movements. On a touchscreen, a grid is less important.

On the current PSTV homescreen, application icons appear diagonally, from row to row:

-0-0-0-
0-0-0-0
-0-0-0-

Moving the cursor from row to row is not only unpredictable, but it actually may move in the opposite horizontal direction from what’s intended.

Say you have the top left application selected. If you press down on the d-pad or analog stick, which second-row app will be selected? It’s the leftmost one, but you’d have no way of knowing that until you actually try it.

When moving down from the top row, the cursor moves left. When moving down from the middle row, the cursor moves right. Moving up from the bottom, the cursor moves left. And moving up from the middle, the cursor moves right.

This means there’s no way to select the rightmost app directly from either the top or bottom row. “Unless you use the analog stick,” you may think — as I thought, myself. But that’s not the case.

As mentioned above, if you pull straight down from the top row, the cursor will move to the app down one row and to the left. But if you pull down and to the right… the cursor will also move down and to the left!

Even though the icons aren’t placed in a grid, the PSTV (or Vita) thinks they are. It thinks the leftmost icons from each row are in a vertical line — and the second from each row, and the third. So, even if you pull down and at at angle, the cursor moves as if you’d just pulled straight down. This renders that fourth icon in the middle row accessible only by moving right from the third icon in that row.

It makes more sense to actually put the icons in either a true grid (like the PS3’s XMB had) or a straight line (like the PS4 has).

I’ve made an HTML proof of concept of what I’d consider for a PSTV homescreen redesign. The look is very much like that of the PS4, though the options for each app have been simplified from their PS4 counterparts. You navigate right or left and press the button appropriate for the action you wish to take.

I’ve sized and placed the interface elements on a grid that splits the screen into 64 units horizontally and 36 units vertically. You can view the grid by clicking the “Grid Background” button below the prototype. There are a few more aesthetic options to play with.

I’ve also kept one feature that the PSTV already has that the PS4 doesn’t: folders. When the folder app icon is selected, you can expand it to choose an app within.

### Other UI updates

Here are few more interfact issues I wanted to address.

#### Launching and backing out of apps.

Say we want to enter the Network section of the PSTV's Settings app. To do so, we'd do the following:

1. Tap X (after selecting the Settings app)
2. Tap X again (to actually start the app)
3. Tap X again (to go into Network settings)

Simple enough -- except for the Vita-ish requirement to tap X twice to start the app: once to get to a pre-launch page (which should be eliminated on the PSTV), and then again to launch.

But say we want to back out of this section, completely close the Settings app, and then get back to the homescreen? The process should be something like this:

1. Tap Circle
2. Tap Circle
3. Tap Circle

or this:

1. Tap PS Button

But what you have to do is this:

1. Tap Circle
2. Tap PS Button
3. Hold Circle (as the pre-launch page "peels" from the screen)
4. Move left (from the "Featured" page that now shows onscreen)

The first step is optional, if you don't want to revsit the main Settings page. But it shouldn't require three or four different actions to do one thing: go back.

This process is another artifact from the Vita. The page peeling makes a lot more sense on a touchscreen, as does the swiping left to get back to the homescreen. On a console, the process should be optimized for the controller.


# &nbsp;

# NOTES

Let's get this out of the way, first thing. I love the PlayStation TV. I was ready to love it from the moment Sony announced it back in September, 2013.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rG5l78gbvpU" frameborder="0" allowfullscreen></iframe>

But Sony doesn't seem to love it. I can see why they think it's a tough sell.

- What does it do?
- What niche does it fill?
- Who, other than current Vita owners would want this in the first place.

I want to help. I want to make the PSTV better. I want to let people know it exists. And I want to show them why they need it.

Now, I'm sure Sony's thought of much of this already. They have a massive marketing department.

Maybe they just don't think it's worth investing too much money on something they considered dead on arrival. But I think it's at least worth the risk of paying one person to be its champion -- for a couple of years, anyway.

### What the PSTV Is
- It's a PlayStation.
- It's also a PlayStation 2, a PlayStation 3, and a PlayStation 4.
- A Vita

### What the PSTV Isn't
- A mobile touch device
- A Vita

A device isn't just the sum of its component parts. A device is defined by how it's used. When the iPad was announced, it was ridiculed as just a big iPhone or iPod touch. Technically, that's not far off. But it was also completely wrong. The iPad was something totally different, because it's used differently.

The PSTV is often referred to as just a Vita. And again, technically, that's true. But again, it's totally wrong. The PSTV is almost never used in the same situations as a Vita.

### What the PSTV Can Be
- The best retro-gaming console on the market
- Yet another streaming device (but it needs to be)
- The perfect vacation companion device

Upscale 240p content to 960 (windowboxed in 1080), using nearest neighbor scaling and adding scanlines.


### Changes
- Interface.
- no whitelist (but well maintained list of fully supported games)
- Retro scaling


## Streaming Media
The PSTV doesn’t need to be an Apple TV or Amazon Fire or even a Chromecast. But it does need to have Netflix.

I've got no less than eight devices in my house on which I can watch Netflix. So why do I need another?

Maybe I don't. But the PSTV needs it, for the same reason some hotels have pools they know will rarely be used. People make decisions based on what they think they might do, rather than how they actually live. If you take away an option, you could lose them as customers.

Also, it is nice to have -- just in case. Being able to switch right from a game to movie without turning off my device or changing inputs on my TV is a nice little perk. Plus, Sony has the best Netflix interface.

For my summer vacation, I’m taking one portable media device with me. If the PSTV had Netflix and Spotify, it’d be a no-brainer. But I’m bringing the Amazon Fire TV Stick, because I can use it to watch Netflix and listen to Prime Music on the road.


## Retro Mode

Instead of stretching and blurring old PS! games, upscale them using a multiple of their native 240p resolution.