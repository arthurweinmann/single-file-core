BUILDDIR                 := $(CURDIR)/build
SHELL                     = /usr/bin/env bash
ARCH                              = $(shell uname -p)
GIT_COMMIT                        = $(shell git rev-parse HEAD)
GIT_SHA                           = $(shell git rev-parse --short HEAD)
GIT_TAG                           = $(shell git describe --tags --abbrev=0 --exact-match 2>/dev/null)
GIT_DIRTY                         = $(shell test -n "`git status --porcelain`" && echo "dirty" || echo "clean")

DEPTEST=$(shell command -v $(SHELL) 2> /dev/null)
ifeq ($(DEPTEST),)
$(error "We could not find bash")
endif

# +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.PHONY: build
build: $(BUILDDIR)
	npm install && npx rollup -c rollup.config.js

$(BUILDDIR):
	@mkdir -p $(BUILDDIR)