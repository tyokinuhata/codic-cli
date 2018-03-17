# How to use

### Setup

```
$ npm i
$ chmod +x ./codic.js
```

### Command

- Access Token setting command

```
$ ./codic.js set <your_access_token>
```

- Variable get command

```
$ ./codic.js get <japanese_word> <casing>
```

casing(option)

|casing|example|
|:--|:--|
|camel|casingEsample|
|pascal|CasingExample|
|lower underscore|casing_example|
|upper underscore|CASING_EXAMPLE|
|hyphen|casing-example|
|-|casing example|