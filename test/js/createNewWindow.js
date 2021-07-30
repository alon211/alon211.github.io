var a = document.getElementsByTagName('a')

for (i in a) {
	try {
		if (a[i].href.toString().indexOf("https://") != -1) {
			a[i].target = '_blank'
		}
	}
	catch (err) {

	}


}
