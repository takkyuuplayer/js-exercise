.PHONY: test node_modules node_modules/upgrade

setup: node_modules node_modules/upgrade

node_modules:
	yarn install

node_modules/upgrade:
	yarn upgrade --latest

test:
	yarn run test

build:
	yarn webpack:watch

lint:
	$(shell npm bin)/eslint --fix src test

http-server:
	$(shell npm bin)/http-server -t public/

run:
	cd docker && $(MAKE) run

run-test:
	cd docker && $(MAKE) run-test
