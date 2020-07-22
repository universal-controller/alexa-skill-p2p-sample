# alexa-p2p-skill-sample

## Usage
You will need little to no Alexa skills knowledge, and a basic setup environment with Node.js support.

### What you will need
- Alexa Developer account
- A RabbitMQ hosted somewhere
  - You can use [CloudAMPQ](https://www.cloudamqp.com/) free plan (setup can't be easier, no credit card required).

### Steps
1. Create your custom skill on the Alexa platform
    * Access your [Alexa developer console](https://developer.amazon.com/alexa/console/ask)
    * [Create new skill](https://developer.amazon.com/alexa/console/ask/create-new-skill)
    * Fill your "Skill Name", choose "Custom" model and then "Alexa-Hosted (Node.js)"
    * Select "Hello World Skill" as your template

2. Setup your skill invocation name and code
    * At your skill's "Build" tab, select "Invocation" (left side menu), and fill your "Invocation name"
      - This is what you will use when asking alexa to use your skill. (E.g.: "Alexa, open <invocation name> and run command.")
