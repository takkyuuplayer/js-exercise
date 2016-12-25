.PHONY: test

all: setup

setup:
	yarn install

test:
	npm run test:script

upgrade:
	yarn upgrade

lint:
	$(shell npm bin)/eslint --fix src test
