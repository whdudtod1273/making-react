function createElement(type: string, props: any, ...children: any) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}

function createTextElement(text: string) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export { createElement, createTextElement };
