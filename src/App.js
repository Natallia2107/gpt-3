import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { CTA, Brand, Navbar } from './components'

import './App.css'

const App = () => (
	<div className='App'>
		<div className='gradient__bg'>
			<Navbar />
			<Header />
		</div>
		<Brand />
		<WhatGPT3 />
		<Features />
		<Possibility />
		<CTA />
		<Blog />
		<Footer />
	</div>
)

export default App

// rafce = tworzy to :
// import React from 'react'

// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App
