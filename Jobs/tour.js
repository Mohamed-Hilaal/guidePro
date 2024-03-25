const { Queue } = require('bullmq')
const IORedis = require('ioredis')

const connection = new IORedis()

const queue = new Queue('tourQueue', {
    connection,
});

async function addJob() {
    await queue.add('my-job', {
        foo: 'bar',
    })
}
  