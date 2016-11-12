.PHONY: test

all: setup upgrade

setup:
	npm install yarn

test:
	npm run test

upgrade:
	$(shell npm bin)/yarn install
	$(shell npm bin)/yarn outdated | awk 'NR>2{print $0}' | tac | awk 'NR>1{print $1}' | xargs $(shell npm bin)/yarn upgrade

lint:
	$(shell npm bin)/eslint test
