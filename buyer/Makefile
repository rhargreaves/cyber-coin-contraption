DOCKER_IMAGE=cyber-coin-contraption-buyer
DOCKER_RUN=docker run \
					 -e BUYER_CB_API_KEY \
					 -e BUYER_CB_API_SECRET \
					 -e BUYER_CB_USE_SANDBOX \
					 -e BUYER_CB_PASSPHRASE \
					 -it $(DOCKER_IMAGE)

all: test

build:
	docker build -t $(DOCKER_IMAGE) .
.PHONY: build

test: build
	$(DOCKER_RUN) \
		npm run test
.PHONY: test

run:
	$(DOCKER_RUN) \
		npm run start
.PHONY: run
