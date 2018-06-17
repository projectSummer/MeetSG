import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
} from 'react-native';

import t from 'tcomb-form-native';
import realm from '../Database/AllSchemas';
import RNGooglePlaces from 'react-native-google-places';
import Icon from 'react-native-vector-icons/Entypo';

const Form = t.form.Form;
var LABEL_COLOR = "#000000";
var ERROR_COLOR = "#a94442";
var FONT_SIZE = 17;
var FONT_WEIGHT = "500";

const Event = t.struct({
    name: t.String,
    type: t.String
});

const options = {
    fields: {
        name: {
            error: 'You need a name for your event, idiot'
        },
        type: {
            error: 'whatkanda event isit?'
        },
    },
};

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

export default class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            error: false,
            errorMsg: ""
        };
    }

    static navigationOptions = {
        header: null
    };

    openSearchModal = () => {
        RNGooglePlaces.openPlacePickerModal()
            .then((place) => {
                console.log(place);
                try {
                    let chosenPlace = place.name;
                    this.setState({location: chosenPlace});
                } catch(error) {
                    console.log(error);
                }
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
        this.setState({error: false});
    };

    handleSubmit = () => {
        const value = this._form.getValue();
        if (!isEmpty(value) && this.state.location !== "") {
            const event = {
                id: Math.floor(Date.now() / 1000),
                name: value.name,
                type: value.type,
                location: this.state.location
            }
            realm.insertEvent(event);
            this.props.navigation.navigate('Home');
        }

        if (this.state.location === "") {
            this.setState({error: true});
        }
    };

    getLocationMessage(location, hasError) {
        if (location === "") {
            if (hasError) {
                return "Choose a location...anywhere...";
            } else {
                return "";
            }
        } else {
            return "Location chosen: " + this.state.location;
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Form
                    type={Event}
                    ref={c => this._form = c}
                    options={options}
                />

                <View style={styles.subContainer}>
                    <Text style={this.state.error ? styles.invalidLabel : styles.validLabel}>Location</Text>
                    <TouchableOpacity
                        onPress={this.openSearchModal}
                    >
                        <Icon name="location" style={styles.icon}>
                            <Text style={{fontFamily: 'Arial', fontSize: 15}}>  Pick a location</Text>
                        </Icon>
                    </TouchableOpacity>
                    <View style={styles.subContainer}>
                        <Text style={this.state.error ? styles.errorText : styles.normalText}>
                            {this.getLocationMessage(this.state.location, this.state.error)}</Text>
                    </View>
                </View>

                <Button
                    title="Submit Event"
                    onPress={this.handleSubmit}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    icon: {
        fontSize: FONT_SIZE,
        borderRadius: 3,
        height: 35,
        textAlignVertical: 'center',
        textAlign: 'left',
        marginTop: 5,
        marginBottom: 5
    },
    normalText: {
        color: LABEL_COLOR,
        fontSize: FONT_SIZE-2,
    },
    errorText: {
        color: ERROR_COLOR,
        fontSize: FONT_SIZE,
    },
    validLabel: {
        color: LABEL_COLOR,
        fontSize: FONT_SIZE,
        marginTop: 7,
        marginBottom: 7,
        fontWeight: FONT_WEIGHT,
    },
    invalidLabel: {
        color: ERROR_COLOR,
        fontSize: FONT_SIZE,
        marginTop: 7,
        marginBottom: 7,
        fontWeight: FONT_WEIGHT,
    },
    subContainer: {
        marginBottom: 10,
    }
});
