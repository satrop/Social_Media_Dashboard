# <a href="https://satrop.github.io/Social_Media_Dashboard/dist/">Frontend Mentor - Social media dashboard with theme switcher solution</a>

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Added a tiny extra and changed the text of the toggle depending on the theme selected with CSS.

### Screenshots

<p align="center">
  <img src="./screenshot.png">
  <img src="./screenshot-2.png">
</p>

### Links

- Solution URL: [Solution](https://github.com/satrop/Social_Media_Dashboard)
- Live Site URL: [Working Site](https://satrop.github.io/Social_Media_Dashboard/dist/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Pure JS

### What I learned

Biggest thing I learnt was how to hook into the the `localStorage` to store the selected theme for when a visitor returns to the site. It (as far as I can see) seems to take president over `prefers-color-scheme` in the SCSS file `colors.scss`. I will do some more research and get that added in at a later date.

Another new trick I learnt was using media query mixins, for lack of a better term, inline. Check out the snippet bellow:

```scss
.toggle-wrapper {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@include u.breakpoint(lg) {
		justify-content: unset;
	}
}
```
This is very useful when only needing to update a few properties. If I were doing anymore that one or two I would stick with the traditional method of adding the larger breakpoints after mobile 

### Continued development

As always, I'm trying to learn something new every day and every build. 

