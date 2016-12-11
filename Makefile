.PHONY: test

all: setup

setup:
	yarn install
	yarn upgrade

test:
	yarn run test

upgrade:
	yarn upgrade

lint:
	$(shell npm bin)/eslint --fix src test
