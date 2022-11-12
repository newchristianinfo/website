import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Verse from './Verse.vue'
import Todo from './Todo.vue'
import Nav from './Nav.vue'
//import 'roughjs'
//import 'wired-elements'
import VueRoughNotation from 'vue-rough-notation';

export default {
	Layout,
	NotFound: DefaultTheme.NotFound,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx)
		ctx.app.component('Verse', Verse)
		ctx.app.component('Todo', Todo)
		ctx.app.component('Nav', Nav)
		ctx.app.use(VueRoughNotation);
		ctx.app.config.compilerOptions.isCustomElement = tag => {
			console.log('testing tag', tag)
			return !!tag.beginsWith('wired-')>-1
		}

	},
	setup: DefaultTheme.setup
}