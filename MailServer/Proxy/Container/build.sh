#!/usr/bin/env bash
set -e
alias docker=nerdctl $@
# if ! [ -x "$(command -v ko)" ]; then
#     GO111MODULE=on go get -mod=readonly github.com/google/ko/cmd/ko@v0.4.0
# fi

# output=$(ko publish --local --preserve-import-paths --tags= . | tee)
# ref=$(echo $output | tail -n1)
export PUSH_IMAGE=true
nerdctl build -t devopsxpro/cloudwork-reverse-proxy .
# docker tag $ref $IMAGE
if $PUSH_IMAGE; then
    nerdctl push $IMAGE
fi