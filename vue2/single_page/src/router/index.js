import VR from 'vue-router'

import mainpa from "../components/mainpa"
import about from "../components/about"

export default new VR({
	routes: [{
		path: '/main',
		component: mainpa
	}, {
		path:"/about",
		component: about
	}]
})