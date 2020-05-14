import styled from "styled-components";

export const Table = styled.table`
  & {
    margin: 3px;
    border: 1.5px solid Black;

    border-collapse: collapse;

    background-color: #f5f5f5;

    th,
    td {
      text-align: left;
      padding: 5px 20px;
      border: 1px solid #555;
      background-color: unset;
    }

    th {
      color: #fff;
      background-color: #999;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  position: relative;
  float: left;
  padding-right: 15px;
  padding-left: 15px;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  background-color: ${(props) => (props.bg ? props.bg : "gray")};
  max-width: ${(props) => (props.size === "small" ? "33.3333333333%" : "100%")};
  flex: ${(props) =>
      props.size === "small" ? "0 0 33.3333333333%" : "0 1 100%"}
    .btn-group {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`;
// export const Col2 = styled.div`
//   width: 10px;
//   height:1000px;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right:1000px;
//   -ms-flex-preferred-size: 0;
//   flex-basis: 0;
//   -ms-flex-positive: 1;
//   flex-grow: 1;
//   display: flex;
//   background-color: ${props => props.bg ? props.bg : 'gray'};
//   max-width: ${props => props.size === 'small' ? '33.3333333333%' : '100%' };
//   flex: ${props => props.size === 'small' ? '0 0 33.3333333333%' : '0 1 100%' }

//   .btn-group {
//     display: flex;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `
export const Link = styled.a`
  color: white;
  background-color: ${(props) => (props.bg ? props.bg : "red")};
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  margin-right: 0.75rem;
  margin-top: auto;
  margin-bottom: auto;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    border-color: rgba(255, 255, 255, 0.75);
  }
`;
