.PHONY: test

all: setup

setup:
	yarn install
	yarn upgrade

test:
	yarn run test

build:
	yarn webpack:watch

upgrade:
	yarn outdated | awk 'NR>2{print $$1}' | sed '$$d' | xargs yarn upgrade

lint:
	$(shell npm bin)/eslint --fix src test

http-server:
	$(shell npm bin)/http-server -t public/
