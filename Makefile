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

http-server:
	$(shell npm bin)/http-server -t public/
