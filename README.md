# Blockchain

## Author

Luke McCann

## What is a Blockchain?

Blockchain is a modern technology based around recording information in such a way that makes it difficult, beleived to be impossible, to tamper with records. Blockchain creates a permanent immutable ledger of records in a chain where any tampering of a single block breaks the rest of the items in the chain. 

The beauty of Blockchain lies in it's simplicity. Blocks are created which enable transactions to be processed. However, in order for blocks to be created miners must create the blocks through the mining process. Each of the blocks has a hash value which must begin with a number of leading 0's in order to be valid. This is calculated through the use of a Nonce, which is calculated using processing power. Once a correct Nonce is discovered enabling the hashing algorithm (SHA-256) to create a hash with n leading zeros the block is added to the chain.

Each block in the chain has a reference to the previous block (much like a linked list). This means that each block in the chain is reliant on the unique hash of every pre-existing block. If an item is tampered with, the blocks coming after that block no longer match and the chain is broken (no longer valid). Blockchain is also distributed, this means that multiple copies of the ledger are saved accross multiple servers, when miners mine these blocks this validates that not only the hash generated is valid, but that the ledger hash of the blocks are the same as those saved to other versions. This means that any form of tampering with the ledger can quickly be detected even if someone managed to take the inordinate amount of time to mine every block after a tamper the blocks would still not match their other versions. 

# Concepts

## The Chain Array

The chain is represented by an array. This array, contains all of the "blocks" that are created/mined as a "chain". While this may seem conceptually to the "Linked List" data structure, it is not a true Linked List, instead of nodes being linked using pointers, the data is stored within blocks via a Merkle Tree.

## Merkle Tree

In cryptography and computer science, a Merkle Tree (a.k.a Hash Tree). Each "leaf" (node) of the Merkle Tree is labelled with the cryptographic hash of a data block. Every non-leaf node of the Merkle Tree is also labelled with the concatenated cryptographic hash of the of it's child nodes. 

Merkle Trees allow for efficient and secure verification of the contents of large data structures, and are generalisation of hash lists and hash chains.
Demonstrating that a leaf node is a part of a given binary hash tree requires computing a number of hashes proportional to the logarithm of the number of leaf nodes in the tree, whereas a hash list is proportional to the number of leaf nodes in the tree.

## The New Transactions Array

The new transactions are held in this array, before they
are placed into a new block and mined. These are the pending transactions.
After creating our new blocks it is important to clear our newTransactions
array to make way for the next load of data for the next block. 

## Blocks

When we create a new block we want to have an index "id" to identify the block, not only this but we need a timestamp to tell us the time this block was created, the pending transactions are then saved into the new block.
we also want a nonce within our block (number used only once). Finally we want a hash stored in the block, this is the hash is a hashed version of the data wihtin the block. New transactions are passed through a ahshing function, all of the trnasactions are "compressed" into this single string.
Finally, a previous hash is also stored in the block, this acts as a "pointer" to the previous block in the chain, this is the data from the previous block hashed into a string. Once the block has been created we 
must then push the new block onto the chain. 

## Nonce

Nonce stands for "number used only once". A nonce is a number (any number) which works as a mathematical proof that we have generated our block in a legitimate way by using a proof-of-work method.

## Hashing

In this project a SHA256 hashing algorithm is used.
Hashing is the act of converiting a value to a compressed numerical value. Each hash in SHA256 is proven to be unique, therefore there is a unique representation of any possible value. It takes in data of arbitrary lengths and produces a fixed length hash value.

In our hash method we take the previous blocks hash, the data for the current block, 
and the nonce and stringify these items to pass in to the sha256 hash function. Since the previous hash is already a string, we only need to convert our integer nonce using toString()
and our current block object, as an object this requires the use of JSON.stringify().