# Phoenix

web framework

## Features

mvc pattern

high developer productivity

high application performance

channel - real time feature

precompiled templates

## Learn

[elixir guide](https://elixir-lang.org/getting-started/introduction.html)

[elixir learning resource](https://elixir-lang.org/learning.html)

[phoenix learning resource](https://hexdocs.pm/phoenix/learning.html)

[my collections](https://github.com/Tuosi/materials#elixir-refs)

## Phoenix Components

internal parts (each with its own purpose and role)

- endpoint: request lifecycle, dispatches request to router

- router: parses request and dispatches it to controller action

  - pipeline: groups of plugs to a set of routes

- controller: define action to handle request

  - action: prepare data and render or redirect

- view: render templates, act as a presenter, define helpers

- template: structure with dynamic data, precompiled and fast

- channel: manage sockets for easy realtime communication

- pub-sub: underlies the channel layer, allow client to subscribes to topics

  - pub-sub adapter: abstract for third-party pub-sub integration

## Phoenix Layers

multi-layer system designed to be modular and flexible

- cowboy: web server. [guide](https://ninenines.eu/docs/en/cowboy/1.0/guide/)

- plug: a specification for constructing reusable modules or functions. [guide](https://hexdocs.pm/phoenix/plug.html), [doc](https://hexdocs.pm/plug/readme.html)

  - plugs can be defined and executed in a set order, line pipeline.

  - example: authentication, params pre-processing, rendering, etc.

- ecto: orm, dsl, database wrapper

  - repo: a connection to an individual database

  - schema: data definition and associations

  - query: retrieve data from repo and cast it into schema

  - changeset: declare transformations action on data

    - includes: type casting, validations, and more

    - postgresql: default database


# 来源：Phoenix doc