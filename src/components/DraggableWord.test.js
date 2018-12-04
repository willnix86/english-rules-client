import React from 'react';
import { mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { DragDropContext } from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import DraggableWord from './DraggableWord';

function wrapInTestContext(DecoratedComponent) {
    return DragDropContext(TestBackend)(
        () => <DecoratedComponent />
    );
}

describe('<DraggableWord />', () => {

    it('renders without crashing', () => {
        mount(<DraggableWord />);
    });

    describe('Renders with the right word', () => {

        it('renders HOUSE', () => {
            const OriginalDraggableWord = DraggableWord.DecoratedComponent;
            const identity = el => el;
            let word = 'house';

            let root = TestUtils.renderIntoDocument(
                <OriginalDraggableWord 
                    value={word}
                    connectDragSource={identity}
                    isDragging />
            )

            let div = TestUtils.findRenderedDOMComponentWithClass(root, 'draggableWord');
            expect(div.textContent).toEqual('house');
        });

        it('renders RUN', () => {
            const OriginalDraggableWord = DraggableWord.DecoratedComponent;
            const identity = el => el;
            let word = 'run';

            let root = TestUtils.renderIntoDocument(
                <OriginalDraggableWord 
                    value={word}
                    connectDragSource={identity}
                    isDragging />
            )

            let div = TestUtils.findRenderedDOMComponentWithClass(root, 'draggableWord');
            expect(div.textContent).toEqual('run');
        });

        it('renders SMELLY', () => {
            const OriginalDraggableWord = DraggableWord.DecoratedComponent;
            const identity = el => el;
            let word = 'smelly';

            let root = TestUtils.renderIntoDocument(
                <OriginalDraggableWord 
                    value={word}
                    connectDragSource={identity}
                    isDragging />
            )

            let div = TestUtils.findRenderedDOMComponentWithClass(root, 'draggableWord');
            expect(div.textContent).toEqual('smelly');
        });
        

    });

    it('changes opacity while dragging', () => {
        const DraggableWordContext = wrapInTestContext(DraggableWord);
        const root = TestUtils.renderIntoDocument(<DraggableWordContext value='car' />)

        const backend = root.getManager().getBackend();

        let div = TestUtils.findRenderedDOMComponentWithClass(root, 'draggableWord');
        
        expect(div.style.opacity).toEqual("1");

        const word = TestUtils.findRenderedComponentWithType(root, DraggableWord);
        backend.simulateBeginDrag([word.getHandlerId()]);

        div = TestUtils.findRenderedDOMComponentWithClass(root, 'draggableWord');
        
        expect(div.style.opacity).toEqual("0.5");

    })

});