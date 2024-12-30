import { editGroup, getGroup, getGroupsOrderName } from "../models/GroupModel.js";

export async function selectGroup(req, res) {
    try {
        const group = await getGroup();
        res.status(200).send(group);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting group');
    }
};

export async function selectGroupOrderName(req, res) {
    try {
        const groupsOrderName = await getGroupsOrderName();
        res.status(200).send(groupsOrderName);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting group');
    }
};

export async function updateGroup(req, res) {
    try {
        const { id, group } = req.body;
        await editGroup(id, group);
        res.status(200).send('Group updated');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error selecting group');
    }
};

