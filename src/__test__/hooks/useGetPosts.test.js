import useGetPosts from '../../hooks/useGetPosts'
import { renderHook } from "@testing-library/react-hooks";
import FeedMock from '../../__mocks__/FeedMock'
import { shallow } from 'enzyme'
import React from 'react'

function fetchMock(url, suffix = "") {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve(FeedMock),
      });
    }, 200 + Math.random() * 300)
  );
}

beforeAll(() => {
  jest.spyOn(global, "fetch").mockImplementation(fetchMock);
});

afterAll(() => {
  global.fetch.mockClear();
});

const Elements = () => {  
  const props = useGetPosts({ 
    token: 'e1b4cdc364a4cf0909d3a073c6e1632f2fdc89ef'
  })
  return (<div {...props}/>)
}         

const container = shallow(<Elements />)

it("useGetPosts hook runs correctly", async () => {
  console.log(container.prop('posts'))
  
})