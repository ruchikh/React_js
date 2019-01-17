var contentDiv = document.getElementById('content')

let routes = {
	'/': homepage,
	// '/index.html': homepage,
	'/about': about,
	'/contact': contact
}


window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}
console.log(window.location.pathname)

let onNavClick = (pathname) => {
	console.log(pathname)
	console.log(window.location.origin)
	window.history.pushState({}, pathname, window.location.origin + pathname);
	contentDiv.innerHTML = routes[pathname]
}

contentDiv.innerHTML = routes[window.location.pathname]

