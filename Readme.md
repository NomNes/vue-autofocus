# @nomnes/vue-autofocus

Autofocus directive for Vue

```bash
npm install @nomnes/vue-autofocus
#or
yarn add @nomnes/vue-autofocus
```

## Usage

```javascript
import Vue from "vue";
import autofocus from "@nomnes/vue-autofocus";

Vue.use(autofocus);
```

or

```javascript
import Vue from "vue";
import { autofocus } from "@nomnes/vue-autofocus";

Vue.directive("autofocus", autofocus);
```

and then in template:

```html
<input v-autofocus/>
```

## Options

When used as a plugin, the name of the directive can be passed using the options:

```javascript
import Vue from "vue";
import autofocus from "@nomnes/vue-autofocus";

Vue.use(autofocus, { name: 'autofocus' });
```
