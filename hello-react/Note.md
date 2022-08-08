# 리액트를 다루는 기술

## 1. JSX 문법

```jsx
import React from ‘react‘;

function App() {
  return (
    <h1>리액트 안녕!</h1>
    <h2>잘 작동하니?</h2>
  )
}

export default App;
```

위 코드는 요소(h1, h2)들이 부모 요소 하나에 의해 감싸져 있지 않기 때문에 정상 실행되지 않는다.
이러한 오류는 다음과 같은 방법으로 해결할 수 있다.

```jsx
import React from 'react';
 
function App() {
  return (
    <>//React v16의 Fragment 기능
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}
 
export default App;
```

> ### 📌 여러 요소를 왜 하나의 요소로 감싸줘야 되는걸까?
>
> ###### 가상 돔에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록, 또한 컴포넌트 내부는 하나의 돔 트리 구조로 이루어져야 한다는 규칙이 있다.



## 2. If문 대신 삼항 연산자

JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수 없다.
조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if문을 설정하여 사전에 값을 설정하거나, { } 안에 삼향 연산자(조건부 연산자)를 사용하면 된다.

```jsx
import React from ‘react‘;

function App() {
  const name = ‘리액트‘;
  return (
    <div>
      {name === ‘리액트‘ ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}

export default App;
```



## 3. 인라인 스타일링

[카멜 표기법](https://github.com/dsmjimin/TIL-MD/blob/main/snake%2C%20camel%2C%20pascal%20case.md)으로 작성해야한다.



## 4. 비구조화 할당 문법

```jsx
import React from 'react';
 
const MyComponent = props => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br />
      children 값은 {props.children}입니다.
    </div>
  );
};
 
export default MyComponent;
```

위 코드는 props.name, props.children과 같이 'props.'라는 키워드를 앞에 붙이고 있다.
이러한 작업을 더 편하게 하기 위해 ES6의 비구조화 할당 문법으로 내부 값을 바로 추출할 수 있다.

```jsx
import React from 'react';
 
const MyComponent = props => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
    </div>
  );
};
 
export default MyComponent;
```

함수의 파라미터가 객체라면 그 값을 바로 비구조화하여 사용할 수 있다.

```jsx
import React from 'react';
 
const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
    </div>
  );
};
 
export default MyComponent;
```
