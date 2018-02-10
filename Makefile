.PHONY: test node_modules node_modules/upgrade

TEST_WATCH_COUNT=1

setup: node_modules node_modules/upgrade

node_modules:
	yarn install

node_modules/upgrade:
	yarn upgrade --latest

test:
	yarn run test

test-mru-watch:
	$(shell npm bin)/nodemon -w src/ -w test/ -e js,jsx -x "make -i test-mru"
	
test-mru:
	@find src test -type f -name "*.spec.js" \
		| xargs ls -t \
		| head -n ${TEST_WATCH_COUNT} \
		| xargs $(shell npm bin)/mocha

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
