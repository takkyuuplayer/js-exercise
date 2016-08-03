.PHONY: test

test:
	$(shell npm bin)/mocha --compilers js:espower-babel/guess ./test/**/*.spec.es6

lint:
	$(shell npm bin)/eslint test
