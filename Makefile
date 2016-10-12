.PHONY: test

setup:
	npm install

test:
	npm run test

lint:
	$(shell npm bin)/eslint test
