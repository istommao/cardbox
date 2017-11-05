# Python list

> list 是 python的基础数据结构，可以理解成一种容器

## 可以放任何你想要放入的python自带的或自定义的数据结构

```python
lst = [1, 2, 3]

lst = ['Hello world', 1, 3.14]

lst = [('Hello', 'world'), {1, 2, 3}, {'Hello': 'world'}, [1, 2, 'Hello', 'world']]
```

## 那Python的list是如何实现自由伸缩的呢?

> Python's lists area really variable-length arrays

`CPython的list结构定义`

```c
typedef struct {
    PyObject_VAR_HEAD
    PyObject **ob_item;

    Py_ssize_t allocated;
} PyListObject;
```

- https://foofish.net/python-list-implements.html