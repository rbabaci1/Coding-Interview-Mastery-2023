printList() {
		let linkedListStr = "HEAD -> ";
		let currentNode = this.head;
		while (currentNode !== null) {
			// Append current node's details to the string
			linkedListStr += `{ value: ${currentNode.value}, next: `;

			if (currentNode.next) {
				linkedListStr += `${currentNode.next.value} } -> `;
			} else {
				// For the last node, next will be null
				linkedListStr += "null } -> ";
			}

			currentNode = currentNode.next;
		}

		linkedListStr += "TAIL";

		console.log(linkedListStr);
	}