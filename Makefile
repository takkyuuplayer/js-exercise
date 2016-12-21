.PHONY: test

all: setup

setup:
	yarn install

test:
	npm run test

upgrade:
	yarn upgrade

lint:
	$(shell npm bin)/eslint --fix src
	$(shell npm bin)/eslint --fix test
